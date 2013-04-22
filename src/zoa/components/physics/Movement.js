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
                    var self = this;
                    self.acceleration = [0, 0];
                    self.linearDamping = 1;
                    self.velocity = [0, 0];
                    self.angularVelocity = 0;
                },
            physicsUpdate: function(elapsed)
                {
                    var self = this;
                    self.velocity[0] += self.acceleration[0] * elapsed;
                    self.velocity[1] += self.acceleration[1] * elapsed;
                    self.x += self.velocity[0] * elapsed;
                    self.y += self.velocity[1] * elapsed;
                    self.rotation += elapsed * self.angularVelocity;
                    self.velocity[0] *= self.linearDamping;
                    self.velocity[1] *= self.linearDamping;
                }
        });

        return MovementComponent;
    }
);