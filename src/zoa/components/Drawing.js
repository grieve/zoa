define(
    [
        'zoa/components/Render'
    ],
    function(
        RenderComponent
    )
    {
        var DrawingComponent = RenderComponent.derive({
            __identifier__: 'drawing',
            __system__: 'render',
            __init__: function override(imgURL)
                {
                    var self = this;
                    override.super.call(self);
                    self.graphic = document.createElement('canvas');
                    self.graphic.width = self.width;
                    self.graphic.height = self.height;
                }
        });

        return DrawingComponent;
    }
);