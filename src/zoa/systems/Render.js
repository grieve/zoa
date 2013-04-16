define(
    [
        'zoa/systems/Base'
    ],
    function(
        BaseSystem
    )
    {
        var RenderSystem = BaseSystem.derive({
            init: function override(target)
                {
                    var self = this;
                    override.super.call(self);
                    self.target = target;
                },
            update: function()
                {
                    var self = this;
                    var idx;
                    for (idx = 0; idx < self.entities.length; idx++)
                    {
                        self.entities[idx].render(self.target);
                    }
                },
            requiredProperties: [
                'graphic'
            ]
        });

        return RenderSystem;
    }
);