//Прокрутка в верх страницы при перезагрузке
$(document).ready(function(){
	$(this).scrollTop(0);
});


$('.slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true
 });

 $('.lineup2021__slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true
 });
 
// =============================================>
//https://jqueryui.com/tabs/

$( function() {
	$( "#selectable" ).selectable();
 } );

// =============================================>
 //Скрыть placeholder при клике
$(document).ready(function () {
	$('.form__input_name').focus(function () {
		$(this).data('placeholder', $(this).attr('placeholder'))
		$(this).attr('placeholder', '');
	});
	$('input').blur(function () {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});
});

// =============================================>

//Переключение класса у кнопок
$('.mortgage__time-item').click(function(){
		$('.mortgage__time-item').removeClass('active');
		$(this).addClass('active');
});

$('.mortgage__item').click(function(){
	$('.mortgage__item').removeClass('active');
	$(this).addClass('active');
});

//=============================================>
$('.header__link').click(function(event){
	event.preventDefault();
	$('.header-plashka').removeClass('active');
	$('.header__link').removeClass('active');
	$('.banner1').removeClass('active');
	$(this).addClass('active');
});

$('.header__link_projects').click(function(){
	$('.header-plashka').addClass('active');
	$('.banner1').addClass('active');
});

//======================================================>

////Очищение формы при клике по сабмиту
// $('.button__mainform').click(function(){
//	$('.form')[0].reset();
//});
 
const inputsTel = document.querySelectorAll('input[type="tel"]');

Inputmask({
  "mask": "+7(999) 999-99-99",
  showMaskOnHover: false
}).mask(inputsTel);
//=========================================================================>

//Меню бургер для мобилки
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__nav').toggleClass('active');
		//$('body').toggleClass('lock');
	});
	$('.header__link_burger').click(function (event) {
		$('.header__burger,.header__nav').toggleClass('active');
		//$('body').toggleClass('lock');
	});
});

//=========================================================================>

//Открытие попапа
$('.level__item_popup').click(function(){
	$('.popup').addClass('active');
});
$('.popup__close').click(function(){
	$('.popup').removeClass('active');
});