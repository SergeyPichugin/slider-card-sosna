"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // Render slides
  var wrapperSlides = document.querySelector('.flexSlider__wrapper');
  fetch('slides.json', {
    mode: 'no-cors'
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    data.slides.forEach(function (item, key) {
      wrapperSlides.innerHTML += "\n                <a href=\"".concat(item.href, "\" class=\"flexSlider__slide_link\">\n                    <div class=\"flexSlider__slide\" style=\"background-image: url('").concat(item.image, "');\">\n                        <div class=\"flexSlider__slide_top\">\n                            <div class=\"flexSlider__slide_top--title\">").concat(item.text, "</div>\n                            <div class=\"flexSlider__slide_top--description\">").concat(item.description, "</div>\n                        </div>\n                        <div class=\"flexSlider__slide_bottom\">\n                            <div class=\"flexSlider__slide_bottom--precent\">").concat(item.precent, "</div>\n                            <div class=\"flexSlider__slide_bottom--btn\">").concat(item.button, "</div>\n                        </div>\n                    </div>\n                </a>\n                ");
    });
  }); // Slider

  var btnLeftSlide = document.querySelector('#slideLeft');
  var btnRightSlide = document.querySelector('#slideRight');
  var wrapper = document.querySelector('.flexSlider__wrapper');
  btnLeftSlide.addEventListener('click', function () {
    wrapper.scrollBy(-550, 0);
  });
  btnRightSlide.addEventListener('click', function () {
    wrapper.scrollBy(550, 0);
  });
});