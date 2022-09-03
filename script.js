const validStyles = `
    border-radius: 7px;
    background-color: green;
    border-color: greenyellow;
`;
const invalidStyles = `
    border-radius: 7px;
    background-color: red;
    border-color: orangered;
`;



let validate = function() {
    let pass = document.getElementById('password').value
    let confPass = document.getElementById('conf-password').value
    if (pass != confPass) {
        document.getElementById("password").classList.add('invalidPass');
        document.getElementById("conf-password").classList.add('invalidPass');
    } else {
        document.getElementById("password").classList.remove('invalidPass');
        document.getElementById("password").classList.add('validPass');
        document.getElementById("conf-password").classList.remove('invalidPass')
        document.getElementById("conf-password").classList.add('validPass');
    }
}

