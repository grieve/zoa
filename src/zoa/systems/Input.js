define(
    [
        'radio',
        'zoa/systems/Base'
    ],
    function(
        Radio,
        BaseSystem
    )
    {
        var InputSystem = BaseSystem.derive({
            init: function override(target)
                {
                    var self = this;
                    override.super.call(self);
                    self._keymap = [];
                    target.onkeydown = function(evt){self._handleKeyDown(evt);};
                    target.onkeyup = function(evt){self._handleKeyUp(evt);};
                    target.onkeypress = function(evt){self._handleKeyPress(evt);};
                    target.onmousedown = function(evt){self._handleMouseDown(evt);};
                    target.onmouseup = function(evt){self._handleMouseUp(evt);};
                },
            update: function()
                {
                    var self = this;
                    var idx;
                    for (idx = 0; idx < self.entities.length; idx++)
                    {
                        self.entities[idx].input(self._keymap);
                    }
                },
            _handleKeyUp: function(evt)
                {
                    var self = this;
                    self._keymap[evt.keyCode] = false;
                },
            _handleKeyDown: function(evt)
                {
                    var self = this;
                    self._keymap[evt.keyCode] = true;
                },
            _handleKeyPress: function(evt)
                {
                    Radio('KeyPressed').broadcast(evt.keyCode);
                },
            _handleMouseUp: function(evt)
                {

                },
            _handleMouseDown: function(evt)
                {

                },
            requiredProperties: [
                'graphic'
            ]
        });

        return InputSystem;
    }
);