
console.log('pio');

import { post } from 'axios';

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
  post('register', registerData);
  
  console.log('pica');
}

const registerForm = document.getElementById('register-form');
registerForm?.addEventListener('submit', registerNewUser);
