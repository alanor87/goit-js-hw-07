const categoriesList = document.querySelector('#categories');
console.log(`В списке ${categories.children.length} категории`);

function getCatName(el) {
    const catName = el.querySelector('h2');
    console.log('Категория: ' + catName.textContent);
}

function getCatCount(el) {
    const catCount = el.querySelector('ul');
    console.log('Количество элементов: ' + catCount.children.length);
}

[...categoriesList.children].forEach(element => {
    getCatName(element);
    getCatCount(element);
});