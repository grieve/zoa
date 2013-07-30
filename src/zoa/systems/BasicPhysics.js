define(
    [
        'zoa/systems/Base'
    ],
    function(
        BaseSystem
    )
    {
        var PhysicsSystem = BaseSystem.derive({
            init: function override(target)
                {
                    var me = this;
                    override.super.call(me);
                },
            update: function(elapsed)
                {
                    if (elapsed > 10000)
                    {
                        console.log("something seriously wrong skip, pick it up next step");
                        return;
                    }
                    var me = this;
                    var seconds = elapsed / 1000;
                    var idx;
                    for (idx = 0; idx < me.entities.length; idx++)
                    {
                        for (var j = 0; j < me.entities[idx]._components.physics.length; j++)
                        {
                            me.entities[idx]._components.physics[j].call(me.entities[idx], seconds);
                        }
                    }
                },
            requiredProperties: [
                'x',
                'y',
                'rotation',
                'velocity',
                'angularVelocity'
            ]
        });

        return PhysicsSystem;
    }
);