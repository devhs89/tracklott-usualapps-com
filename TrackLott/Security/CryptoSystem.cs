using System.Security.Cryptography;
using System.Text;
using TrackLott.Constants;

namespace TrackLott.Security;

public static class CryptoSystem
{
  public static async Task<RSA> GetRsaKey()
  {
    await CreateRsaKeys();

    var keyPaths = KeyPaths();
    var privateKeyBytes = await File.ReadAllBytesAsync(keyPaths["privateKeyPath"]);
    if (privateKeyBytes == null) throw new Exception(ResponseMsg.UnableToReadFileContent);
    var privateXmlString = Encoding.UTF8.GetString(privateKeyBytes);

    var rsa = RSA.Create();
    rsa.FromXmlString(privateXmlString);
    return rsa;
  }

  private static async Task CreateRsaKeys()
  {
    var keyPaths = KeyPaths();
    if (File.Exists(keyPaths["privateKeyPath"])) return;

    var rsa = RSA.Create();
    var privateXmlKey = rsa.ToXmlString(true);
    var publicXmlKey = rsa.ToXmlString(false);
    await using var idRsa = File.Create(keyPaths["privateKeyPath"]);
    await using var idRsaPub = File.Create(keyPaths["publicKeyPath"]);
    await idRsa.WriteAsync(Encoding.UTF8.GetBytes(privateXmlKey));
    await idRsaPub.WriteAsync(Encoding.UTF8.GetBytes(publicXmlKey));
  }

  private static Dictionary<string, string> KeyPaths()
  {
    var jwtKeysDir = Environment.GetEnvironmentVariable(EnvVarName.TracklottAuthKeysDir);
    if (jwtKeysDir == null) throw new Exception(ResponseMsg.MissingSecurityKeysDir);

    if (!Directory.Exists(jwtKeysDir)) Directory.CreateDirectory(jwtKeysDir);

    const string privateRsa = "id_rsa";
    const string publicRsa = "id_rsa.pub";
    var privateKeyPath = Path.Combine(jwtKeysDir, privateRsa);
    var publicKeyPath = Path.Combine(jwtKeysDir, publicRsa);

    return new Dictionary<string, string>
    {
      { "privateKeyPath", privateKeyPath },
      { "publicKeyPath", publicKeyPath }
    };
  }
}