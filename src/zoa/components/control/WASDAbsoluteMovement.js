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
                    var me = this;
                    me.speed = 500;
                },
            __update__: function(keymap)
                {
                    var me = this;
                    me.acceleration = [0, 0];
                    if (keymap[68])
                        me.acceleration[0] += me.speed;
                    if (keymap[65])
                        me.acceleration[0] -= me.speed;
                    if (keymap[83])
                        me.acceleration[1] += me.speed;
                    if (keymap[87])
                        me.acceleration[1] -= me.speed;
                }
        });

        return WASDMovement;
    }
);