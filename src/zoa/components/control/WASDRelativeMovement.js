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
                    identifier: 'WASDRelativeMovement',
                    requiredIntents: ['hasPhysics']
                },
            __init__: function()
                {
                    var self = this;
                    self.speed = 500;
                },
            __update__: function(keymap)
                {
                    var self = this;
                    self.acceleration = [0, 0];
                    var abs_accel = [0 ,0];
                    if (keymap[68])
                        abs_accel[0] -= self.speed;
                    if (keymap[65])
                        abs_accel[0] += self.speed;
                    if (keymap[83])
                        abs_accel[1] = self.speed;
                    if (keymap[87])
                        abs_accel[1] -= self.speed;

                    self.acceleration[0] = -(Math.sin(self.rotation) * abs_accel[1] + Math.sin(self.rotation + 90) * abs_accel[0]);
                    self.acceleration[1] = Math.cos(self.rotation) * abs_accel[1] + Math.cos(self.rotation + 90) * abs_accel[0];
                }
        });

        return WASDMovement;
    }
);