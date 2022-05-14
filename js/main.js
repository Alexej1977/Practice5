document.querySelector('.btn-burger').addEventListener('click', () => {
	document.querySelector('.btn-burger').classList.toggle('open');
	document.querySelector('.mobil-nav').classList.toggle('open');
	document.querySelector('body').classList.toggle('open');
});


document.querySelector('.mobil-nav-list').addEventListener('click', () => {
	document.querySelector('.btn-burger').classList.toggle('open');
	document.querySelector('.mobil-nav').classList.toggle('open');
	document.querySelector('body').classList.toggle('open');
});

$(document).ready(function () {
	$('.testimonials-list').slick({
		arrows: false,
		dots: true,
	});
});