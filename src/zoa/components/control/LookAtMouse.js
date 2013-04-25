define(
    [
        'zoa/components/control/Base'
    ],
    function(
        ControlComponent
    )
    {
        var WASDMovement = ControlComponent.derive({
            __meta__: {
                    identifier: 'LookAtMouse',
                    requiredIntents: ['hasPhysics']
                },
            __update__: function(keymap, mouse)
                {
                    var self = this;
                    self.rotation = (Math.PI/2) + Math.atan2(mouse.position.y - self.y - self.halfHeight, mouse.position.x - self.x - self.halfWidth);
                }
        });

        return WASDMovement;
    }
);