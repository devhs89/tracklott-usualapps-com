namespace TrackLott.Constants;

public static class ErrorResponse
{
  public const string GenericError = "Something went wrong. Sorry for any inconvenience.";
  public const string TrackLottDbConnFail = "TrackLott Database connection failed.";
  public const string AccountCreationFailed = "Something went wrong. Failed to create user account.";

  public const string AccountAlreadyExists =
    "Account with the specified email address already exists. Please try again.";

  public const string PasswordsMismatch = "Password and Repeat Password fields must match.";
  public const string UserNotExist = "User does not exist. Please check credentials and try again";
  public const string InvalidLoginDetails = "Invalid email or password";
  public const string UserLockedOut = "Account Locked. Please contact administrator.";
  public const string AddToRoleFailed = "Failed to assign a role to this user.";
}