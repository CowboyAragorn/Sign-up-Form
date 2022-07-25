const loginForm = document.querySelector('#loginForm');
const bothPasswords = document.querySelectorAll('.password')
const inputs = document.querySelectorAll('[required]');
const confirmPassword = document.querySelector('#confirmPassword');
const submitBtn = document.querySelector('#submitBtn')
//Display error//
//when clicking the submit btn, go through all the inputs, see which are invalid, and add the invalid class to those inputs//
submitBtn.addEventListener('click', function(e){
    for(let i=0; i<inputs.length;i++){
        if(!inputs[i].validity.valid){
            inputs[i].classList.add('error');
            inputs[i].nextElementSibling.classList.add('shown');
            inputs[i].nextElementSibling.classList.remove('hidden');
            e.preventDefault();
        }
    }
})

for(let i=0; i<inputs.length;i++){
    inputs[i].addEventListener('input', function(){
        if(inputs[i].validity.valid){
            inputs[i].classList.remove('error');
            inputs[i].nextElementSibling.classList.add('hidden');
            inputs[i].nextElementSibling.classList.remove('shown');

        }
    })
}