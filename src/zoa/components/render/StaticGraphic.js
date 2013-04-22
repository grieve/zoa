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
                    var self = this;
                    override.super.call(self);
                    self.graphic = new Image();
                    self.graphic.src = imgURL;
                }
        });

        return StaticGraphicComponent;
    }
);