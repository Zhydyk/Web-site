
		$(document).ready(function(){
			var touch = $('#touch-menu');
			var menu = $('ul.nav');

			$(touch). on('click', function(e){
				e.preventDefault();
				menu.slideToggle();
			});
			// $(window).resize(function(){
			// 	var wid = $(window).width();
			// 	if(wid > 760 && menu.is(':hidden')){
			// 		menu.removeAttr('style');
			// 	}
			// });
		});
	$(document).ready(FUNCTION() { // Ждём загрузки страницы
$(".three-column").click(FUNCTION(){    // Событие клика на маленькое изображение
VAR img = $(THIS);    // Получаем изображение, на которое кликнули
VAR src = img.attr('src'); // Достаем из этого изображения путь до картинки
$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
"<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
"<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
"</div>");
$(".popup").fadeIn(800); // Медленно выводим изображение
$(".popup_bg").click(FUNCTION(){    // Событие клика на затемненный фон      
$(".popup").fadeOut(800);    // Медленно убираем всплывающее окно
setTimeout(FUNCTION() {    // Выставляем таймер
$(".popup").remove(); // Удаляем разметку всплывающего окна
}, 800);
});
});
});