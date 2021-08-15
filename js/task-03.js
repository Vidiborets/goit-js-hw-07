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
const makeGallery = (images) => {
  const currentEl = document.querySelector('#gallery');
 
  currentEl.classList.add('ul-container')
  currentEl.style.display = 'flex';
  currentEl.style.listStyle = 'none';
 
  
  const makeAddEl = images.reduce((acc ,el) => 
    acc + `<li class="li-item"><img class="image-item" src="${el.url} alt="${el.alt}" width="280px" height="160px></li>`,
  "")

  currentEl.insertAdjacentHTML('afterbegin', makeAddEl);
    const liItemEl = currentEl.querySelector('.image-item')
   liItemEl.style.marginRight = '30px'
}
makeGallery(images)
