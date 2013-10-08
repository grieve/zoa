require.config({
    baseUrl: '../src',
    paths: {
        underscore: 'lib/underscore/underscore',
        radio: 'lib/radio',
        rtext: 'lib/require/text'
    }
});

require(
    [
        "../tests/spec/utils/timer",
        //"../tests/spec/graphics/Spritemap"
    ],
    function(){
        console.log('wtf');
        var jasmineEnv = jasmine.getEnv();
        jasmineEnv.updateInterval = 1000;

        var htmlReporter = new jasmine.HtmlReporter();

        jasmineEnv.addReporter(htmlReporter);

        jasmineEnv.specFilter = function(spec) {
            return htmlReporter.specFilter(spec);
        };
        
        jasmineEnv.execute();
    }
);