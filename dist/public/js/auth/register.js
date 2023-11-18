'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { 'default': mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
console.log('pio');
const axios_1 = require('axios')();
function registerNewUser() {
  console.log('register');
  const inputUserName = document.getElementById('user-input-name');
  const inputUserEmail = document.getElementById('user-input-email');
  const inputUserPassword = document.getElementById('user-input-password');
  const userName = inputUserName.value;
  const userEmail = inputUserEmail.value;
  const userPassword = inputUserPassword.value;
  const registerData = {
    userName,
    userEmail,
    userPassword
  };
  console.log(registerData);
  axios_1.default.post('register', registerData);
  console.log('pica');
}
const registerForm = document.getElementById('register-form');
registerForm?.addEventListener('submit', registerNewUser);
