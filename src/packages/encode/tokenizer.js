// import CryptoJS from "crypto-js"
let CryptoJS = require("crypto-js");
let key = "base64:poyx6CuX4GmI6jyWcLLNMUz4/4A3+LrACCaoHkmfcU8=";
function encrypt (text) {
    return CryptoJS.AES.encrypt(text, key).toString();
}
function decrypt (cipher) {
    let bytes  = CryptoJS.AES.decrypt(cipher, key);
    return bytes.toString(CryptoJS.enc.Utf8);
}
function verify (cipher, text) {
    return decrypt(cipher) === text;
}

export {
    encrypt, decrypt, verify
}