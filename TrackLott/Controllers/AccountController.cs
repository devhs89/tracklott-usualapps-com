using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrackLott.Constants;
using TrackLott.Interfaces;
using TrackLott.Models.DataModels;
using TrackLott.Models.DTOs;

namespace TrackLott.Controllers;

public class AccountController : BaseApiController
{
  private readonly UserManager<TrackLottUserModel> _userManager;
  private readonly SignInManager<TrackLottUserModel> _signInManager;
  private readonly ITokenService _tokenService;
  private readonly IMapper _mapper;
  private readonly IUserClaimsService _userClaimsService;

  public AccountController(UserManager<TrackLottUserModel> userManager, SignInManager<TrackLottUserModel> signInManager,
    ITokenService tokenService, IMapper mapper, IUserClaimsService userClaimsService)
  {
    _userManager = userManager;
    _signInManager = signInManager;
    _tokenService = tokenService;
    _mapper = mapper;
    _userClaimsService = userClaimsService;
  }

  [HttpPost(EndRoute.Register)]
  [AllowAnonymous]
  public async Task<ActionResult<WebTokenDto>> Register(RegisterDto registerDto)
  {
    if (!registerDto.Password.Equals(registerDto.RepeatPassword, StringComparison.Ordinal))
      return BadRequest(ResponseMsg.PasswordsMismatch);

    var userExists =
      await _userManager.Users.SingleOrDefaultAsync(usr =>
        usr.NormalizedEmail.Equals(registerDto.Email.Normalize().ToUpper()));
    if (userExists != null)
      return BadRequest(ResponseMsg.AccountAlreadyExists);

    var appUser = _mapper.Map<TrackLottUserModel>(registerDto);
    var createResult = await _userManager.CreateAsync(appUser, registerDto.Password);
    if (!createResult.Succeeded) return BadRequest(createResult.Errors.FirstOrDefault());

    var roleResult = await _userManager.AddToRoleAsync(appUser, AppRole.User);
    if (roleResult.Succeeded)
    {
      return new WebTokenDto
      {
        JwtToken = await _tokenService.CreateToken(appUser)
      };
    }

    await _userManager.DeleteAsync(appUser);
    return BadRequest(roleResult.Errors.FirstOrDefault());
  }

  [HttpPost(EndRoute.Login)]
  [AllowAnonymous]
  public async Task<ActionResult<WebTokenDto>> Login(LoginDto loginDto)
  {
    var user = await _userManager.Users
      .SingleOrDefaultAsync(rec => rec.NormalizedEmail.Equals(loginDto.Email.Normalize()));

    if (user == null)
      return Unauthorized(ResponseMsg.InvalidLoginDetails);

    var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, true);
    if (!result.Succeeded) return Unauthorized(ResponseMsg.InvalidLoginDetails);

    return new WebTokenDto()
    {
      JwtToken = await _tokenService.CreateToken(user)
    };
  }

  [HttpPost(EndRoute.Show)]
  public async Task<ActionResult<ProfileDto>> ShowUser()
  {
    var userEmail = _userClaimsService.GetNormalisedEmail();
    if (userEmail == null) return BadRequest(userEmail + ResponseMsg.InvalidToken);

    var appUser = await _userManager.Users.SingleOrDefaultAsync(rec => rec.NormalizedEmail.Equals(userEmail));
    if (appUser == null)
      return BadRequest(ResponseMsg.UserNotExist);

    var profile = _mapper.Map<ProfileDto>(appUser);
    return profile;
  }

  [HttpPut(EndRoute.UpdateInfo)]
  public async Task<ActionResult<TrackLottUserModel>> UpdateInfo(ProfileUpdateDto profileUpdateDto)
  {
    var userEmail = _userClaimsService.GetNormalisedEmail();
    if (userEmail == null) return BadRequest(ResponseMsg.InvalidToken);

    var appUser = await _userManager.Users.SingleOrDefaultAsync(rec => rec.NormalizedEmail.Equals(userEmail));
    if (appUser == null)
      return BadRequest(ResponseMsg.UserNotExist);

    _mapper.Map(profileUpdateDto, appUser);

    var res = await _userManager.UpdateAsync(appUser);
    if (!res.Succeeded) return BadRequest(ResponseMsg.GenericError);
    return NoContent();
  }

  [HttpPost(EndRoute.UpdatePassword)]
  public async Task<ActionResult<string>> UpdatePassword(ChangePasswordDto changePasswordDto)
  {
    if (!changePasswordDto.newPassword.Equals(changePasswordDto.repeatPassword, StringComparison.Ordinal))
      return BadRequest(ResponseMsg.PasswordsMismatch);

    var userEmail = _userClaimsService.GetNormalisedEmail();
    if (userEmail == null) return BadRequest(ResponseMsg.InvalidToken);

    var appUser = await _userManager.Users.SingleOrDefaultAsync(rec => rec.NormalizedEmail.Equals(userEmail));
    if (appUser == null) return BadRequest(ResponseMsg.UserNotExist);

    var result = await _userManager.ChangePasswordAsync(appUser, changePasswordDto.currentPassword, changePasswordDto.newPassword);

    return result.Succeeded
      ? ResponseMsg.PasswordUpdated
      : BadRequest(ResponseMsg.PasswordChangeFailed);
  }
}