define(
    [
        'zoa/components/render/Base'
    ],
    function(
        RenderComponent
    )
    {
        var StaticGraphicComponent = RenderComponent.derive({
            __meta__: {
                    identifier: 'StaticGraphicComponent'
                },
            __init__: function override(imgURL)
                {
                    var me = this;
                    override.super.call(me);
                    me.graphic = new Image();
                    me.graphic.src = imgURL;
                }
        });

        return StaticGraphicComponent;
    }
);