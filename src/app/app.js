define(
    [
        'radio',
        'zoa/Engine',
        'zoa/Scene',
        'zoa/Entity',
        'app/entities/Spaceship',
        'app/entities/Asteroid'
    ],
    function(
        Radio,
        Engine,
        Scene,
        Entity,
        Spaceship,
        Asteroid
    )
    {
        var App = Engine.derive({
            new: function()
                {
                    var self = this;
                    arguments.callee.super.new(800, 600);
                    Radio('preloaderStateChanged').subscribe([self.onPreloadStateChange, self]);
                    self.preload(
                        [
                            'assets/gfx/test_ship.png'
                        ]
                    );
                },
                onPreloadStateChange: function(state, percentage)
                    {
                        var self = this;
                        console.log("loading... " + percentage + "%");
                        if (state)
                        {
                            self.activeScene = new Scene();
                            var ship = new Spaceship(400 - 16, 300 - 16);
                            self.activeScene.add(ship);
                            var asteroid = new Asteroid(100, 200, 200);
                            self.activeScene.add(asteroid);
                            self.start();
                        }
                    }
        });
        return App; 
    }
);