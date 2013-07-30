define(
    [
        'zoa/components/Base'
    ],
    function(
        BaseComponent
    )
    {
        var MovementComponent = BaseComponent.derive({
            __meta__: {
                    identifier: 'MovementComponent',
                    system: 'physics',
                    intents: ['hasPhysics'],
                    requiredIntents: ['hasGeometry']
                },
            __init__: function(imgURL)
                {
                    var me = this;
                    me.acceleration = [0, 0];
                    me.linearDamping = 1;
                    me.velocity = [0, 0];
                    me.angularVelocity = 0;
                },
            __update__: function(elapsed)
                {
                    var me = this;
                    me.velocity[0] += me.acceleration[0] * elapsed;
                    me.velocity[1] += me.acceleration[1] * elapsed;
                    me.x += me.velocity[0] * elapsed;
                    me.y += me.velocity[1] * elapsed;
                    me.rotation += elapsed * me.angularVelocity;
                    me.velocity[0] *= me.linearDamping;
                    me.velocity[1] *= me.linearDamping;
                }
        });

        return MovementComponent;
    }
);