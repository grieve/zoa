define(
    [
        'zoa/components/Render'
    ],
    function(
        RenderComponent
    )
    {
        var StaticGraphicComponent = RenderComponent.derive({
            __identifier__: 'staticGraphic',
            __system__: 'render',
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