const incButton = document.querySelector('button[data-action="increment"]');
const decButton = document.querySelector('button[data-action="decrement"]');
const counter = document.querySelector('#value');
incButton.addEventListener('click', () => {counter.textContent = Number(counter.textContent) + 1;});
decButton.addEventListener('click', () => {counter.textContent = Number(counter.textContent) - 1; });