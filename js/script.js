$(".phone").mask("+7(999) 999-9999");

/* sidebar */
document.addEventListener('DOMContentLoaded', function () {
	const toggler = document.querySelector('.navbar-toggler');
	const sidebar = document.querySelector('.sidebar');
	const searchButton = document.querySelector('.sidebar__search');
	const offcanvas = document.querySelector('#offcanvasNavbar');

	toggler.addEventListener('click', function () {
		const isActive = offcanvas.classList.contains('active');
		sidebar.classList.toggle('active');
		if (isActive) {
			offcanvas.classList.remove('active');
			searchButton.classList.remove('active');
		}
	});

	searchButton.addEventListener('click', function () {
		const isActive = offcanvas.classList.contains('active');
		if (isActive) {
			offcanvas.classList.remove('active');
			searchButton.classList.remove('active');
		} else {
			offcanvas.classList.add('active');
			searchButton.classList.add('active');
			sidebar.classList.add('active');
			const bootstrapOffcanvas = new bootstrap.Offcanvas(offcanvas);
			bootstrapOffcanvas.show();
		}
	});

	const observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			if (mutation.type === 'childList') {
				const backdrop = document.querySelector('.offcanvas-backdrop');
				if (backdrop) {
					backdrop.addEventListener('click', function () {
						sidebar.classList.remove('active');
						searchButton.classList.remove('active');
						offcanvas.classList.remove('active');
						backdrop.classList.remove('show');
					});
				}
			}
		});
	});

	observer.observe(document.body, { childList: true, subtree: true });
});


$(function () {
	$("#service").selectmenu();
	$("#privacy").checkboxradio();
	$(".privacy-input").checkboxradio();

	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: 'Предыдущий',
		nextText: 'Следующий',
		currentText: 'Сегодня',
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
		dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
		dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
		dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		weekHeader: 'Не',
		dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['ru']);

	/* $("#datepicker").datepicker(); */

	const activeDates = ["2025-04-20", "2025-04-25", "2025-04-28"];

	$("#datepicker").datepicker({
		beforeShowDay: function (date) {
			const formattedDate = $.datepicker.formatDate('yy-mm-dd', date);
			if (activeDates.includes(formattedDate)) {
				return [true, "active-date"];
			} else {
				return [false, ""];
			}
		}
	});

});

$('.free-service__slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	speed: 600,
	prevArrow: '.free-service-prev',
	nextArrow: '.free-service-next',
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2
			}
		}
	]
});


$('.main-projects__slider').slick({
	infinite: false,
	slidesToShow: 7,
	slidesToScroll: 1,
	speed: 600,
	prevArrow: '.main-projects__prev',
	nextArrow: '.main-projects__next',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 3
			}
		}
	]
});


/* Сладйер на странице "Статья" */
$('.slider-slick').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 600,
	prevArrow: '.slider-block-arrow-prev',
	nextArrow: '.slider-block-arrow-next',
});