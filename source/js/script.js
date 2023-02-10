'use strict'
const btnNav = document.querySelector('.header__btn');
const dropMenu = document.querySelector('.header__menu');
const header = document.querySelector('.header');

if(header.classList.contains('no-js')){
  header.classList.remove('no-js');
}

btnNav.addEventListener('click', function (){
  btnNav.classList.toggle('header__btn--close');
  dropMenu.classList.toggle('header__menu--open');
})

if (document.querySelector('.slider-wrapper__slide')) {
  const slide1 = document.querySelector('.slider-wrapper__img--first');
  const slide2 = document.querySelector('.slider-wrapper__img--second');
  const pin = document.querySelector('.slider-wrapper__slide');
  const sliderWrapper = document.querySelector('.slider-wrapper__block');

  pin.addEventListener('mousedown', function (evt) {
    let startClick = evt.clientX;
    const mouseMove = (evtMove) => {
      let shift = startClick - evtMove.clientX;
      startClick = evtMove.clientX;

      let widthSlider = pin.offsetLeft - shift;
      if (widthSlider < 0) {
        widthSlider = 0
      }
      if (widthSlider > sliderWrapper.offsetWidth) {
        widthSlider = sliderWrapper.offsetWidth
      }
      pin.style.left = widthSlider + "px";
      slide1.style.width = widthSlider + "px";
      slide2.style.width = (sliderWrapper.offsetWidth - widthSlider) + "px";
      sliderWrapper.removeEventListener('mouseleave', mouseMove);
    }
    sliderWrapper.addEventListener('mousemove', mouseMove);
    sliderWrapper.addEventListener('mouseup', function () {
      sliderWrapper.removeEventListener('mousemove', mouseMove)
    })
  })
}
