const loginForm = document.querySelector('#loginForm');
const bothPasswords = document.querySelectorAll('.password')
const inputs = document.querySelectorAll('[required]');
const confirmPassword = document.querySelector('#confirmPassword');
const submitBtn = document.querySelector('#submitBtn')
submitBtn.addEventListener('click', function(e){
    for(let i=0; i<inputs.length;i++){
        if(!inputs[i].validity.valid){
            inputs[i].classList.add('error');
            e.preventDefault();
        }
    }
})
