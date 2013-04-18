define(
    [
        'zoa/systems/Base'
    ],
    function(
        BaseSystem
    )
    {
        var InputSystem = BaseSystem.derive({
            init: function override(target)
                {
                    var self = this;
                    override.super.call(self);
                    target.onkeydown = function(evt){self.handleKeyDown(evt);};
                    target.onkeyup = function(evt){self.handleKeyUp(evt);};
                    target.onmousedown = function(evt){self.handleMouseDown(evt);};
                    target.onmouseup = function(evt){self.handleMouseUp(evt);};
                },
            update: function()
                {
                    var self = this;
                    var idx;
                    for (idx = 0; idx < self.entities.length; idx++)
                    {
                        self.entities[idx].handleInput();
                    }
                },
            requiredProperties: [
                'graphic'
            ]
        });

        return InputSystem;
    }
);