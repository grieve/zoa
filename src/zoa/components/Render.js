define(
    [
        'zoa/components/Base'
    ],
    function(
        BaseComponent
    )
    {
        var RenderComponent = BaseComponent.derive({
            __identifier__: 'render',
            __system__: 'render',
            __init__: function(imgURL)
                {
                    var self = this;
                    self.graphic = null;
                    if (!self.hasOwnProperty('x') ||
                        !self.hasOwnProperty('y') ||
                        !self.hasOwnProperty('rotation')
                    )
                    {
                        throw "'Render' components require preexisting 'Geometry' component";
                    }
                },
            render: function(target)
                {
                    var self = this;
                    if (self.x + self.width < 0 ||
                        self.y + self.height < 0 ||
                        self.x > 800 ||
                        self.y > 600)
                    {
                        return;
                    }
                    target.save();
                    target.translate(self.halfWidth, self.halfHeight);
                    target.translate(self.x, self.y);
                    target.rotate(self.rotation);
                    target.drawImage(
                        self.graphic,
                        0,
                        0,
                        self.width,
                        self.height,
                        -self.halfWidth,
                        -self.halfHeight,
                        self.width,
                        self.height
                    );
                    target.restore();
                }
        });

        return RenderComponent;
    }
);