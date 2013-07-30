define(
    [
        'zoa/components/render/Base'
    ],
    function(
        RenderComponent
    )
    {
        var DrawingComponent = RenderComponent.derive({
            __meta__: {
                    identifier: 'DrawingComponent'
                },
            __init__: function override(imgURL)
                {
                    var me = this;
                    override.super.call(me);
                    me.graphic = document.createElement('canvas');
                    me.graphic.width = me.width;
                    me.graphic.height = me.height;
                }
        });

        return DrawingComponent;
    }
);