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
                    identifier: 'WASDAbsoluteMovement',
                    requiredIntents: ['hasPhysics']
                },
            __init__: function()
                {
                    var self = this;
                    self.speed = 300;
                },
            __update__: function(keymap)
                {
                    var self = this;
                    self.acceleration = [0, 0];
                    if (keymap[68])
                        self.acceleration[0] += self.speed;
                    if (keymap[65])
                        self.acceleration[0] -= self.speed;
                    if (keymap[83])
                        self.acceleration[1] += self.speed;
                    if (keymap[87])
                        self.acceleration[1] -= self.speed;
                }
        });

        return WASDMovement;
    }
);