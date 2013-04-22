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
            physicsUpdate: function()
                {
                    var self = this;
                    if (self.x < self._boundaries[0])
                    {
                        console.log("under X");
                        self.x = self._boundaries[2];
                    }
                    if (self.x > self._boundaries[2])
                    {
                        console.log("over X");
                        self.x = self._boundaries[0];
                    }
                    if (self.y < self._boundaries[1])
                    {
                        console.log("under Y");
                        self.y = self._boundaries[3];
                    }
                    if (self.y > self._boundaries[3])
                    {
                        console.log("over Y");
                        self.y = self._boundaries[1];
                    }
                }
        });

        return WrappedBoundary;
    }
);