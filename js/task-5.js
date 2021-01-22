const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', () => {
    outputName.textContent = inputName.value;
    if (!inputName.value) { outputName.textContent = 'незнакомец' }
});