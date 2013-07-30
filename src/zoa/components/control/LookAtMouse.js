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
                    var me = this;
                    me.rotation = (Math.PI/2) + Math.atan2(mouse.position.y - me.y - me.halfHeight, mouse.position.x - me.x - me.halfWidth);
                }
        });

        return WASDMovement;
    }
);