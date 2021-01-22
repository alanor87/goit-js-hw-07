const dragLine = document.querySelector('#font-size-control');
const textLine = document.querySelector('#text');
dragLine.addEventListener('input', () => textLine.style.fontSize = dragLine.value + 'px');