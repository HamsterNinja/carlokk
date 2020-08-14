var swiper = new Swiper('.swiper-container.main-swiper', {
      slidesPerView: 1,
      loop: false,
      allowTouchMove: false,
      navigation: {
      nextEl: '.main-swiper .swiper-button-next',
      prevEl: '.main-swiper .swiper-button-prev',
    },
    pagination: {
     el: '.swiper-pagination',
     type: 'fraction',
     formatFractionCurrent: function(number) {
	 if (number < 10) {
	 number =  number;
	 }
	 return number;
	 },
	 formatFractionTotal: function(number) {
	 if (number < 10) {
	 number = number;
	 }
	 return number;
	 },
    }
});

var scene1 = document.getElementById('scene_1');
var parallaxInstance1 = new Parallax(scene1);

var scene2 = document.getElementById('scene_2');
var parallaxInstance2 = new Parallax(scene2);

var scene3 = document.getElementById('scene_3');
var parallaxInstance3 = new Parallax(scene3);