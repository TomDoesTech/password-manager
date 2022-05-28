import pbkdf2 from "crypto-js/pbkdf2";
import { AES, enc, SHA256 } from "crypto-js";

export function hashPassword(password: string) {
  return SHA256(password).toString();
}

export function generateVaultKey({
  email,
  hashedPassword,
  salt,
}: {
  email: string;

  hashedPassword: string;
  salt: string;
}) {
  return pbkdf2(`${email}:${hashedPassword}`, salt, {
    keySize: 32,
  }).toString();
}

export function decryptVault({
  vaultKey,
  vault,
}: {
  vaultKey: string;
  vault: string;
}) {
  const bytes = AES.decrypt(vault, vaultKey);
  const decrypted = bytes.toString(enc.Utf8);

  try {
    return JSON.parse(decrypted).vault;
  } catch (e) {
    return null;
  }
}

export function encryptVault({
  vaultKey,
  vault,
}: {
  vaultKey: string;
  vault: string;
}) {
  return AES.encrypt(vault, vaultKey).toString();
}
