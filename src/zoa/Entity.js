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
                    var self = this;
                    self._components = {};
                    self._intents = {};
                }
        });
        return Entity;
    }
);