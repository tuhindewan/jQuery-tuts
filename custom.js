$ (document) .ready(function(){

	$ (".hide") .click(function(){

		$ (".box") .hide(4000);
	});

	$ (".show") .click(function(){

		$ (".box") .show(4000);
	});
});