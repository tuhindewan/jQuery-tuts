$ (document) .ready(function(){

	$ (':input') .mouseover(function(){
		$ (':input') .val('Put your mouse back to hide it');
	});

	$ ('input') .mouseover(function(){
		$('.box') .show(1000);
	});

	$ (':input') .mouseout(function(){
		$ (':input') .val('Hover here to show');
	});
	$ ('input') .mouseout(function(){
		$('.box') .hide(1000);
	});

});