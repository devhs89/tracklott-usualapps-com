namespace TrackLott.DTOs;

public class UserTokenDto
{
  public string UserName { get; set; }
  public string Token { get; set; }
  public bool Admin { get; set; } = false;
}