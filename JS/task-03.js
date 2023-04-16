const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const imagesAll = document.querySelector('.gallery');
console.log(imagesAll)
const galleryItem = images => {
  const { url, alt, width } = images;
  return `<li><img class='imd-gallery' src=${url} alt=${alt}, width='1260' height='750'/></li>`;
};

const galleryItemAll = images.map(galleryItem).join('');
imagesAll.insertAdjacentHTML('afterbegin', galleryItemAll);
