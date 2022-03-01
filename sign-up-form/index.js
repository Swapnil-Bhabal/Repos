const pass = document.querySelector('#password');
const cnfPass = document.querySelector('#cnf-password');
const passErrMsg = document.querySelector('.pass-err-msg');
const cnfPassErrMsg = document.querySelector('.cnfpass-err-msg');

cnfPass.addEventListener('input', (event) => {
    if (pass.value !== cnfPass.value) {
        passErrMsg.textContent = '*Passwords do not match';
        cnfPass.style.border = '2px solid rgb(255, 69, 100)';
        pass.style.border = '2px solid rgb(255, 69, 100)';
    } else {
        passErrMsg.textContent = '';
        cnfPass.style.border = 'rgb(0, 183, 255) 2px solid';
        pass.style.border = '1px solid grey';
        cnfPass.style.border = '1px solid grey';
    }
});

