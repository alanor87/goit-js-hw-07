const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingList = ingredients.map(element => {
    const ingredient = document.createElement('li');
    ingredient.textContent = element;
    return ingredient;
})

const toBuyList = document.querySelector('#ingredients');
toBuyList.append(...ingList);