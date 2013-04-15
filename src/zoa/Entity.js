define(
    [
        'zoa/Class'
    ],
    function(
        Class
    )
    {
        var Entity = Class.derive({
            new: function(width, height, graphic)
                {
                    var self = this;
                    self.width = width;
                    self.height = height;
                    self._halfWidth = width / 2;
                    self._halfHeight = height / 2;
                    self.x = 0;
                    self.y = 0;
                    self.angularVelocity = 0;
                    self.velocity = [0, 0];
                    self.rotation = 0;
                    if (graphic)
                    {
                        self.graphic = new Image();
                        self.graphic.src = graphic;
                    }
                    else
                    {
                        self.graphic = document.createElement('canvas');
                        self.graphic.width = width;
                        self.graphic.height = height;
                    }
                },
            render: function(target)
                {
                    var self = this;
                    target.save();
                    target.translate(self._halfWidth, self._halfHeight);
                    target.translate(self.x, self.y);
                    target.rotate(self.rotation);
                    target.drawImage(
                        self.graphic,
                        0,
                        0,
                        self.width,
                        self.height,
                        -self._halfWidth,
                        -self._halfHeight,
                        self.width,
                        self.height
                    );
                    target.restore();
                },
            update: function(elapsed)
                {
                    var self = this;
                    self.rotation += 0.004 * elapsed * self.angularVelocity;
                    self.x += self.velocity[0];
                    self.y += self.velocity[1];
                }
        });
        return Entity;
    }
);