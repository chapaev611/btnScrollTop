/*====================================
BTN SCROLL TOP
======================================*/
$(window).scroll(function() {
	if($(this).scrollTop() > 600) {
		$('#top').fadeIn();
	}else {
		$('#top').fadeOut();
	}
});

$('#top').click(function(e) {
	e.preventDefault();
	$('html,body').animate({scrollTop: 0}, 800);
});
