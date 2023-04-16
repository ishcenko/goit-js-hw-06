const categoriesId = document.querySelector('#categories');
const categoriesItem = document.querySelectorAll('.item');
const allCategores = categoriesItem.length;

console.log(`Number of categories: ${allCategores}`);

categoriesItem.forEach(function (item) {
    const titleItem = item.querySelector('h2');
    const titleText = titleItem.textContent;

    console.log(`Category: ${titleText}`);

    const itemList = item.querySelectorAll('li');
    const allItemList = itemList.length;
    
    console.log(`Elements: ${allItemList}`)
});