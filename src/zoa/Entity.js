define(
    [
        'radio',
        'zoa/Class'
    ],
    function(
        Radio,
        Class
    )
    {
        var Entity = Class.derive({
            identifier: "Anonymous Entity",
            init: function()
                {
                    var me = this;
                    me._components = {};
                    me._intents = {};
                }
        });
        return Entity;
    }
);