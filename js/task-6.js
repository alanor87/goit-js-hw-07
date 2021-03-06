const inputField = document.querySelector('#validation-input');
const validCharLength = Number(inputField.dataset.length);

inputField.addEventListener('blur', () => {
    inputField.classList.add('invalid');
    if (inputField.value.length === validCharLength) inputField.classList.replace('invalid', 'valid');
})