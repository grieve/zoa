define(
    [
        'zoa/components/Base'
    ],
    function(
        BaseComponent
    )
    {
        var WrappedBoundary = BaseComponent.derive({
            __meta__: {
                    identifier: 'WrappedBoundary',
                    system: 'physics',
                    intents: [],
                    requiredIntents: ['hasGeometry']
                },
            __init__: function(minX, minY, maxX, maxY)
                {
                    var me = this;
                    me._boundaries = [minX, minY, maxX, maxY];
                },
            __update__: function()
                {
                    var me = this;
                    if (me.x < me._boundaries[0] - me.width)
                    {
                        me.x = me._boundaries[2];
                    }
                    if (me.x > me._boundaries[2])
                    {
                        me.x = me._boundaries[0] - me.width;
                    }
                    if (me.y < me._boundaries[1] - me.height)
                    {
                        me.y = me._boundaries[3];
                    }
                    if (me.y > me._boundaries[3])
                    {
                        me.y = me._boundaries[1] - me.height;
                    }
                }
        });

        return WrappedBoundary;
    }
);