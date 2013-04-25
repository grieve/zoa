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
                    var self = this;
                    override.super.call(self);
                },
            update: function(elapsed)
                {
                    if (elapsed > 10000)
                    {
                        console.log("something seriously wrong skip, pick it up next step");
                        return;
                    }
                    var self = this;
                    var seconds = elapsed / 1000;
                    var idx;
                    for (idx = 0; idx < self.entities.length; idx++)
                    {
                        for (var j = 0; j < self.entities[idx]._components.physics.length; j++)
                        {
                            self.entities[idx]._components.physics[j].call(self.entities[idx], seconds);
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