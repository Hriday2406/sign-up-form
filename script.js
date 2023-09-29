const password = document.querySelector('#pass');
const confirmPassword = document.querySelector('#cnfrm-pass');
const mismatch = document.querySelector('#mismatch');

function checkPassword(e) {
    if(password.value == '' && confirmPassword.value == ''){
        mismatch.textContent = '';
        mismatch.classList.remove('red-color');
        password.classList.remove('invalid');
        confirmPassword.classList.remove('invalid');
    }
    else if(password.value === confirmPassword.value && password.value != ''){
        mismatch.textContent = '* Passwords are the same';
        mismatch.classList.remove('red-color');
        mismatch.classList.add('green-color');
        password.classList.remove('invalid');
        password.classList.add('valid');
        confirmPassword.classList.remove('invalid');
        confirmPassword.classList.add('valid');
    }
    else{
        mismatch.textContent = '* Passwords does not match.';
        mismatch.classList.add('red-color');
        mismatch.classList.remove('green-color');
        password.classList.add('invalid');
        password.classList.remove('valid');
        confirmPassword.classList.add('invalid');
        confirmPassword.classList.remove('valid');
    }
    // if(e.target.value == ''){
    //     mismatch.textContent = '';
    //     mismatch.classList.remove('red-color');
    //     password.classList.remove('invalid');
    //     confirmPassword.classList.remove('invalid');
    // }

}

confirmPassword.addEventListener('input', checkPassword);
password.addEventListener('input', checkPassword);

// createAcc.addEventListener('click', () => {

// });

