const boxesNumber = document.querySelector('#controls input');
const createButton = document.querySelector('button[data-action="render"]');
const destroyButton = document.querySelector('button[data-action="destroy"]');
const parentDiv = document.querySelector('#boxes');


createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function random_rgb() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
}

function createBoxes() {
    parentDiv.innerHTML = '';
    const childDivCollection = [];
    for (let i = 0, metrics = 30; i < boxesNumber.value; i++, metrics += 10) {
        const newDiv = document.createElement('div');
        newDiv.style.width = metrics + 'px';
        newDiv.style.height = metrics + 'px';
        newDiv.style.backgroundColor = random_rgb();
        console.log(newDiv.style.backgroundColor);
        childDivCollection.push(newDiv);
    }
    parentDiv.append(...childDivCollection);

}

function destroyBoxes() {
    parentDiv.innerHTML = '';
}