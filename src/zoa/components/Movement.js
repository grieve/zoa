define(
    [
        'zoa/components/Base'
    ],
    function(
        BaseComponent
    )
    {
        var MovementComponent = BaseComponent.derive({
            __identifier__: 'movement',
            __system__: 'physics',
            __init__: function(imgURL)
                {
                    var self = this;
                    self.graphic = null;
                    if (!self.hasOwnProperty('x') ||
                        !self.hasOwnProperty('y') ||
                        !self.hasOwnProperty('rotation')
                    )
                    {
                        throw "'Movement' components require preexisting 'Geometry' component";
                    }
                    self.velocity = [0, 0];
                    self.angularVelocity = 0;
                },
            physicsUpdate: function(elapsed)
                {
                    var self = this;
                    self.rotation += elapsed * self.angularVelocity;
                    self.x += self.velocity[0] * elapsed;
                    self.y += self.velocity[1] * elapsed;
                }
        });

        return MovementComponent;
    }
);