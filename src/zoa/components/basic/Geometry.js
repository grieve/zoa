define(
    [
        'zoa/components/Base'
    ],
    function(
        BaseComponent
    )
    {
        var GeometryComponent = BaseComponent.derive({
            __meta__: {
                    identifier: 'GeometryComponent',
                    system: null,
                    intents: ['hasGeometry'],
                    requiredIntents: []
                },
            __init__: function(w, h, x, y)
                {
                    var me = this;
                    me.x = x;
                    me.y = y;
                    me.width = w;
                    me.height = h;
                    me.halfWidth = me.width/2;
                    me.halfHeight = me.height/2;
                },
            width: 0,
            height: 0,
            halfHeight: 0,
            halfWidth: 0,
            x: 0,
            y: 0,
            rotation: 0
        });

        return GeometryComponent;
    }
);