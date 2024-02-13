const fName = document.getElementById('first-name');
const lName = document.getElementById('last-name');
const email = document.getElementById('email-ID');
const num = document.getElementById('number');
const country = document.getElementById('country');
const pinCode = document.getElementById('pin-code');
const password = document.getElementById('pass');
const confirmPassword = document.getElementById('cnfrm-pass');
const fNameAlert = document.querySelectorAll('.mismatch')[0];
const lNameAlert = document.querySelectorAll('.mismatch')[1];
const emailAlert = document.querySelectorAll('.mismatch')[2];
const numAlert = document.querySelectorAll('.mismatch')[3];
const countryAlert = document.querySelectorAll('.mismatch')[4];
const pinCodeAlert = document.querySelectorAll('.mismatch')[5];
const passwordAlert = document.querySelectorAll('.mismatch')[6];

fName.addEventListener('blur', () => {
    check(fName, fNameAlert, 'First Name');
})
lName.addEventListener('blur', () => {
    check(lName, lNameAlert, 'Last Name');
})
email.addEventListener('blur', () => {
    check(email, emailAlert, 'Email');
});
num.addEventListener('blur', () => {
    check(num, numAlert, 'Number');
});
country.addEventListener('blur', () => {
    check(country, countryAlert, 'Country');
})
pinCode.addEventListener('blur', () => {
    check(pinCode, pinCodeAlert, 'Pin Code');
});
password.addEventListener('blur', () => {
    checkEmpty(password, passwordAlert, 'Password');
});
password.addEventListener('input', checkPassword);
confirmPassword.addEventListener('input', checkPassword);


function check(node, nodeAlert, nodeName) {
    node.classList.remove('invalid', 'valid');
    nodeAlert.classList.remove('red-color', 'green-color');
    if(node.value == ''){
        nodeAlert.textContent = `* ${nodeName} can not be empty!`;
        node.classList.add('invalid');
        nodeAlert.classList.add('red-color');
    }
    else {
        if(node.checkValidity()){
            nodeAlert.textContent = `* ${nodeName} is valid.`;
            node.classList.add('valid');
            nodeAlert.classList.add('green-color');
        }
        else {
            nodeAlert.textContent = `* ${nodeName} is not valid.`;
            node.classList.add('invalid');
            nodeAlert.classList.add('red-color');
        }
    }
}

function checkPassword() {
    password.classList.remove('invalid', 'valid');
    confirmPassword.classList.remove('invalid', 'valid');
    passwordAlert.classList.remove('red-color', 'green-color');
    if(password.value == '' && confirmPassword.value == '')
        passwordAlert.textContent = '';
    else {
        if(password.value === confirmPassword.value){
            passwordAlert.textContent = '* Passwords are the same.';
            password.classList.add('valid');
            confirmPassword.classList.add('valid');
            passwordAlert.classList.add('green-color');
        }
        else{
            passwordAlert.textContent = '* Passwords does not match.';
            password.classList.add('invalid');
            confirmPassword.classList.add('invalid');
            passwordAlert.classList.add('red-color');
        }
    }
}

function checkEmpty(node, nodeAlert, nodeName) {
    if(node.value == ''){
        nodeAlert.textContent = `* ${nodeName} can not be empty!`;
        node.classList.add('invalid');
        nodeAlert.classList.add('red-color');
    }
    else {
        nodeAlert.textContent = '';
        node.classList.remove('invalid');
        nodeAlert.classList.remove('red-color');
    }
}