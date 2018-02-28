$(document).ready(function() {
	sideNavStuff();
	typeJs();
	menuForMobile();
	scrollStuff();
	// ajaxStuff()z
});

function sideNavStuff() {
	$('.sideNav li a').click(function(e) {
		$('a').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
		console.log(e);
	});

	if (window.innerWidth < 800) {
		$('.sideNav li a').click(function() {
			$('.sideNav ul').fadeOut(250);
		});
	}
}

function typeJs() {
	setTimeout(function() {
		Typed.new('.intro', {
			strings: [ 'design', 'code', 'and', 'build' ],
			typeSpeed: 150,
			startDelay: 150,
			contentType: 'html'
		});
	}, 1000);
}

setInterval(typeJs, 10000);

function scrollStuff() {
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

				// Does a scroll target exist?

				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate(
						{
							scrollTop: target.offset().top
						},
						700,
						function() {
							// Callback after animation
							// Must change focus!
						}
					);
				}
			}
		});
}

function menuForMobile() {
	$('.sideNav p').click(function() {
		$('.sideNav ul').fadeToggle(350);
	});

	$('.sideNav li a').click(function() {
		$('.sideNav ul').removeClass('active');
	});
}
