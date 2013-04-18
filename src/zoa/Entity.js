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