const signinBth = document.querySelector('.signinBth');
const signupBth = document.querySelector('.signupBth');
const formBox = document.querySelector('.formBox');
const body = document.querySelector('body');

signupBth.onclick =function() {
  formBox.classList.add('active');
  body.classList.add('active');
}
signinBth.onclick =function() {
  formBox.classList.remove('active')
  body.classList.remove('active')
}