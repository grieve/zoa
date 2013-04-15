require.config({
	paths: {
		underscore: 'lib/underscore/underscore',
		radio: 'lib/radio',
		rtext: 'lib/require/text'
	}
});

require(
	[
		'app/app',
	],
	function(App){
		var app = new App();
	}
);