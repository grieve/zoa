define(
    [
        'zoa/components/Base'
    ],
    function(
        BaseComponent
    )
    {
        var ControlComponent = BaseComponent.derive({
            __meta__: {
                    identifier: 'ControlComponent',
                    system: 'input',
                    intents: ['isControlled'],
                    requiredIntents: []
                },
            __init__: function(w, h, x, y)
                {
                    var self = this;
                },
            __update__: function(keymap)
                {
                }
        });

        return ControlComponent;
    }
);