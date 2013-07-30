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
                    var me = this;
                    override.super.call(me);
                    me.target = target;
                    me._keymap = [];
                    me._mouse = {
                        position: {
                            x: 0,
                            y: 0
                        }
                    };
                    document.onkeydown = function(evt){me._handleKeyDown(evt);};
                    document.onkeyup = function(evt){me._handleKeyUp(evt);};
                    document.onkeypress = function(evt){me._handleKeyPress(evt);};
                    target.onmousedown = function(evt){me._handleMouseDown(evt);};
                    target.onmouseup = function(evt){me._handleMouseUp(evt);};
                    target.onmousemove = function(evt){me._handleMouseMove(evt);};
                },
            update: function()
                {
                    var me = this;
                    var idx;
                    for (idx = 0; idx < me.entities.length; idx++)
                    {
                        for (var j = 0; j < me.entities[idx]._components.input.length; j++)
                        {
                            me.entities[idx]._components.input[j].call(me.entities[idx], me._keymap, me._mouse);
                        }
                    }
                },
            _handleKeyUp: function(evt)
                {
                    var me = this;
                    me._keymap[evt.keyCode] = false;
                },
            _handleKeyDown: function(evt)
                {
                    var me = this;
                    me._keymap[evt.keyCode] = true;
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
                    var me = this;
                    me._mouse.position = {
                        x: evt.x - me.target.getBoundingClientRect().left,
                        y: evt.y - me.target.getBoundingClientRect().top
                    };
                },
            requiredProperties: [
                'graphic'
            ]
        });

        return InputSystem;
    }
);