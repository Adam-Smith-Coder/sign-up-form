const validationMessage = document.getElementById('validation-message')

let validate = function() {
    let pass = document.getElementById('password').value
    let confPass = document.getElementById('conf-password').value
    let regEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    
    if (pass.length < 8) {
        validationMessage.textContent = 'Password not long enough';

    } else if (pass.length >= 8 && !regEx.test(pass)) {
        validationMessage.textContent = 'The password must contain 8 or more characters and include at least one number, and one uppercase and lowercase letter';
    
    } else {
        if (pass != confPass) {
        document.getElementById("password").classList.add('invalidPass');
        document.getElementById("conf-password").classList.add('invalidPass');
        validationMessage.textContent = 'Passwords do not match';
        } else {
        document.getElementById("password").classList.remove('invalidPass');
        document.getElementById("password").classList.add('validPass');
        document.getElementById("conf-password").classList.remove('invalidPass')
        document.getElementById("conf-password").classList.add('validPass');
        validationMessage.textContent = '';
        }
    }
}
