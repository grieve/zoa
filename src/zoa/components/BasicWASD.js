define(
    [
        'zoa/components/Base'
    ],
    function(
        BaseComponent
    )
    {
        var RenderComponent = BaseComponent.derive({
            __meta__: {
                    identifier: 'WASDMovement',
                    intents: ['isControlled'],
                    requiredIntents: ['hasPhysics']
                },
            __init__: function(imgURL)
                {
                    var self = this;
                    self.graphic = null;
                },
            update: function(target)
                {
                }
        });

        return RenderComponent;
    }
);