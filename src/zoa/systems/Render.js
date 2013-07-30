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
                    var me = this;
                    override.super.call(me);
                    me.target = target;
                },
            update: function()
                {
                    var me = this;
                    var idx;
                    for (idx = 0; idx < me.entities.length; idx++)
                    {
                        me.entities[idx].render(me.target);
                    }
                },
            requiredProperties: [
                'graphic'
            ]
        });

        return RenderSystem;
    }
);