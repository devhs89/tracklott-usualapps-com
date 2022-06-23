using System.Security.Claims;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrackLott.Constants;
using TrackLott.Extensions;
using TrackLott.Models.DataModels;
using TrackLott.Models.DTOs;
using TrackLott.Services;

namespace TrackLott.Controllers;

[Authorize(AuthPolicyName.RequireAuthenticatedUser)]
public class AccountController : BaseApiController
{
  private readonly UserManager<UserModel> _userManager;
  private readonly SignInManager<UserModel> _signInManager;
  private readonly TokenService _tokenService;
  private readonly IMapper _mapper;

  public AccountController(UserManager<UserModel> userManager, SignInManager<UserModel> signInManager,
    TokenService tokenService, IMapper mapper)
  {
    _userManager = userManager;
    _signInManager = signInManager;
    _tokenService = tokenService;
    _mapper = mapper;
  }

  [HttpPost(EndRoute.Register)]
  [AllowAnonymous]
  public async Task<ActionResult<UserTokenDto>> Register(RegisterDto registerDto)
  {
    if (!registerDto.Password.Equals(registerDto.RepeatPassword, StringComparison.Ordinal))
      return BadRequest(ErrorResponse.PasswordsMismatch);

    var userExists =
      await _userManager.Users.SingleOrDefaultAsync(usr =>
        usr.NormalizedEmail.Equals(registerDto.Email.Normalize().ToUpper()));
    if (userExists != null)
      return BadRequest(ErrorResponse.AccountAlreadyExists);

    var appUser = _mapper.Map<UserModel>(registerDto);
    var createResult = await _userManager.CreateAsync(appUser, registerDto.Password);
    if (!createResult.Succeeded) return BadRequest(createResult.Errors.FirstOrDefault());

    var roleResult = await _userManager.AddToRoleAsync(appUser, AppRole.User);
    if (!roleResult.Succeeded) return BadRequest(roleResult.Errors.FirstOrDefault());

    return new UserTokenDto
    {
      Email = appUser.Email,
      Token = await _tokenService.CreateToken(appUser)
    };
  }

  [HttpPost(EndRoute.Login)]
  [AllowAnonymous]
  public async Task<ActionResult<UserTokenDto>> Login(LoginDto loginDto)
  {
    var user = await _userManager.Users
      .SingleOrDefaultAsync(rec => rec.NormalizedEmail.Equals(loginDto.Email.Normalize()));

    if (user == null)
      return Unauthorized(ErrorResponse.InvalidLoginDetails);

    var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, true);
    if (!result.Succeeded) return Unauthorized(ErrorResponse.InvalidLoginDetails);

    return new UserTokenDto()
    {
      Email = user.NormalizedEmail,
      Token = await _tokenService.CreateToken(user)
    };
  }

  [HttpPost(EndRoute.Show)]
  public async Task<ActionResult<Claim>> ShowUser()
  {
    // var test = User.;
    // var appUser = await _userManager.Users.SingleOrDefaultAsync(rec =>
    //   rec.UserName.Equals(test);
    // if (appUser == null)
    //   return BadRequest(ErrorResponse.UserNotExist);
    //
    // return new ProfileDto()
    // {
    //   Email = appUser.Email,
    //   GivenName = appUser.GivenName,
    //   Surname = appUser.Surname,
    //   Dob = appUser.Dob.ToString(),
    //   Country = appUser.Country
    // };
    return test;
  }

  [HttpPost(EndRoute.UpdatePassword)]
  public async Task<ActionResult<string>> UpdatePassword(PasswordDto passwordDto)
  {
    if (!passwordDto.newPassword.Equals(passwordDto.repeatPassword, StringComparison.Ordinal))
      return BadRequest(ErrorResponse.PasswordsMismatch);

    var username = User.GetUserName();
    var appUser = await _userManager.Users.SingleOrDefaultAsync(rec => rec.UserName.Equals(username));
    if (appUser == null)
      return BadRequest(ErrorResponse.UserNotExist);

    var result =
      await _userManager.ChangePasswordAsync(appUser, passwordDto.currentPassword, passwordDto.newPassword);

    return result.Succeeded
      ? "Password updated successfully"
      : BadRequest(ErrorResponse.PasswordChangeFailed);
  }

  [HttpPut(EndRoute.UpdateInfo)]
  public async Task<ActionResult<string>> UpdateInfo(AccountUpdateDto accountUpdateDto)
  {
    var userName = User.GetUserName();
    var appUser = await _userManager.Users.SingleOrDefaultAsync(rec => rec.UserName.Equals(userName));
    if (appUser == null)
      return BadRequest(ErrorResponse.UserNotExist);

    if (accountUpdateDto.Email != null) appUser.Email = accountUpdateDto.Email;
    if (accountUpdateDto.GivenName != null) appUser.GivenName = accountUpdateDto.GivenName;
    if (accountUpdateDto.Surname != null) appUser.Surname = accountUpdateDto.Surname;
    if (accountUpdateDto.Country != null) appUser.Country = accountUpdateDto.Country;

    var res = await _userManager.UpdateAsync(appUser);
    if (res == null)
      return BadRequest(ErrorResponse.GenericError);

    if (!res.Succeeded) return BadRequest(ErrorResponse.GenericError);
    return NoContent();
  }
}