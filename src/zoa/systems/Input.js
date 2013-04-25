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
                    self.target = target;
                    self._keymap = [];
                    self._mouse = {
                        position: {
                            x: 0,
                            y: 0
                        }
                    };
                    document.onkeydown = function(evt){self._handleKeyDown(evt);};
                    document.onkeyup = function(evt){self._handleKeyUp(evt);};
                    document.onkeypress = function(evt){self._handleKeyPress(evt);};
                    target.onmousedown = function(evt){self._handleMouseDown(evt);};
                    target.onmouseup = function(evt){self._handleMouseUp(evt);};
                    target.onmousemove = function(evt){self._handleMouseMove(evt);};
                },
            update: function()
                {
                    var self = this;
                    var idx;
                    for (idx = 0; idx < self.entities.length; idx++)
                    {
                        for (var j = 0; j < self.entities[idx]._components.input.length; j++)
                        {
                            self.entities[idx]._components.input[j].call(self.entities[idx], self._keymap, self._mouse);
                        }
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
            _handleMouseMove: function(evt)
                {
                    var self = this;
                    self._mouse.position = {
                        x: evt.x - self.target.getBoundingClientRect().left,
                        y: evt.y - self.target.getBoundingClientRect().top
                    };
                },
            requiredProperties: [
                'graphic'
            ]
        });

        return InputSystem;
    }
);