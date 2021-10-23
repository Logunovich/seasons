'use strict';

const slider = document.querySelector('.slides__row'),
      autumnBtn = document.querySelector('.autumn'),
      winterBtn = document.querySelector('.winter'),
      springBtn = document.querySelector('.spring'),
      summerBtn = document.querySelector('.summer');



function moveSlider(px) {
    slider.style.transform = `translateX(-${px}px)`
}



autumnBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveSlider(0);
});

winterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveSlider(370);
});

springBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveSlider(740);
});

summerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveSlider(1110);
});