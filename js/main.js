function toogle(){
	$.('zmdi zmdi-menu').click(function(){
			$('.links a').toggle(300);
	});

};

$document.ready(toggle);