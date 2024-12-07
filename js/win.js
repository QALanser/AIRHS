const gallery = document.querySelector('.image-gallery');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

leftBtn.addEventListener('click', () => {
    gallery.scrollBy({ left: -300, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    gallery.scrollBy({ left: 300, behavior: 'smooth' });
});
