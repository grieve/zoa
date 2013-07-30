define(
    [
        'zoa/Class',
        'radio'
    ],
    function(
        Class,
        Radio
    )
    {
        var Scene = Class.derive({
            init: function()
                {
                    var me = this;
                    me.children = [];
                },
            add: function(child)
                {
                    var me = this;
                    for (var idx = 0; idx < me.children.length; idx++)
                    {
                        if (child == me.children[idx])
                            return;
                    }
                    me.children.push(child);
                },
            suspend: function()
                {
                    var me = this;
                    for (var idx = 0; idx < me.children.length; idx++)
                    {
                        Radio('deregisterEntity').broadcast('all', me.children[idx]);
                    }
                },
            destroy: function()
                {
                    var me = this;
                    for (var idx = 0; idx < me.children.length; idx++)
                    {
                        Radio('deregisterEntity').broadcast('all', me.children[idx]);
                        delete me.children[idx];
                    }
                    delete me.children;
                }
        });
        return Scene;
    }
);