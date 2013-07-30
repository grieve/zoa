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
            init: function override()
                {
                    var me = this;
                    override.super.call(me, 800, 600);
                    Radio('preloaderStateChanged').subscribe([me.onPreloadStateChange, me]);
                    me.preload(
                        [
                            'assets/gfx/test_ship.png'
                        ]
                    );
                },
            onPreloadStateChange: function(complete, percentage)
                {
                    var me = this;
                    console.log("(pre)loading... " + percentage + "%");
                    if (complete)
                    {
                        me.activeScene = new Scene();
                        var ship = new Spaceship(400 - 16, 300 - 16);
                        me.activeScene.add(ship);
                        for (var i = 0; i < 10; i ++)
                        {
                            var asteroid = new Asteroid(
                                80,
                                Math.random() * 800 - 40,
                                Math.random() * 600 - 40
                            );
                            me.activeScene.add(asteroid);
                        }
                        me.start();

                    }
                }
        });
        return App;
    }
);