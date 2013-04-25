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
                    var self = this;
                    self._boundaries = [minX, minY, maxX, maxY];
                },
            __update__: function()
                {
                    var self = this;
                    if (self.x < self._boundaries[0] - self.width)
                    {
                        self.x = self._boundaries[2];
                    }
                    if (self.x > self._boundaries[2])
                    {
                        self.x = self._boundaries[0] - self.width;
                    }
                    if (self.y < self._boundaries[1] - self.height)
                    {
                        self.y = self._boundaries[3];
                    }
                    if (self.y > self._boundaries[3])
                    {
                        self.y = self._boundaries[1] - self.height;
                    }
                }
        });

        return WrappedBoundary;
    }
);