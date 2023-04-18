const categoriesItem = document.querySelectorAll('.item');

categoriesItem.forEach((item) => {
    console.log(`Category:`, item.firstElementChild.textContent);
    console.log(`Elements:`, item.lastElementChild.children.length);
});