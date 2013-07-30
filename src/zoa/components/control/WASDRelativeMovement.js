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
                    var me = this;
                    me.speed = 500;
                },
            __update__: function(keymap)
                {
                    var me = this;
                    me.acceleration = [0, 0];
                    var abs_accel = [0 ,0];
                    if (keymap[68])
                        abs_accel[0] -= me.speed;
                    if (keymap[65])
                        abs_accel[0] += me.speed;
                    if (keymap[83])
                        abs_accel[1] = me.speed;
                    if (keymap[87])
                        abs_accel[1] -= me.speed;

                    me.acceleration[0] = -(Math.sin(me.rotation) * abs_accel[1] + Math.sin(me.rotation + 90) * abs_accel[0]);
                    me.acceleration[1] = Math.cos(me.rotation) * abs_accel[1] + Math.cos(me.rotation + 90) * abs_accel[0];
                }
        });

        return WASDMovement;
    }
);