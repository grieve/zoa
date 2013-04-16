define(
    [
        'zoa/components/Base'
    ],
    function(
        BaseComponent
    )
    {
        var GeometryComponent = BaseComponent.derive({
            __identifier__: 'geometry',
            __system__: null,
            __init__: function(w, h, x, y)
                {
                    var self = this;
                    self.x = x;
                    self.y = y;
                    self.width = w;
                    self.height = h;
                    self.halfWidth = self.width/2;
                    self.halfHeight = self.height/2;
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