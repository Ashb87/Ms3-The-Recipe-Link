$(document).ready(function () {
  $(".sidenav").sidenav();
  $('.collapsible').collapsible();
  $('select').formSelect();
  $('.modal').modal();
    

});


// Check to see if the passwords match when user registers

const checkIfPasswordsMatch = () => {
  let password = document.getElementById('password');
  let confirmPassword = document.getElementById('confirm_password');

  let messageText = document.querySelector('.message-text');
  let regButton = document.querySelector('.btn-large');

  if (password.value !== confirmPassword.value) {
    messageText.innerHTML = 'Passwords do not match!';
    messageText.style.color = 'red';

    regButton.setAttribute('disabled', true);
    regButton.classList.add('btn-disabled');
  } else if (password.value === confirmPassword.value) {
    messageText.innerHTML = 'Passwords match!';
    messageText.style.color = 'green';

    regButton.removeAttribute('disabled', true);
    regButton.classList.remove('btn-disabled');
  }
};