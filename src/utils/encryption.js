// --- src/utils/encryption.js ---
import CryptoJS from 'crypto-js';
const SECRET_KEY = 'securevault_key';

export function encryptNote(text) {
  return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
}

export function decryptNote(ciphertext) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
}