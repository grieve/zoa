define(
    [
        'underscore',
        'radio',
        'zoa/Class',
        'zoa/systems/Render',
        'zoa/systems/BasicPhysics',
        'zoa/systems/Input'
    ],
    function(
        _,
        Radio,
        Class,
        RenderSystem,
        BasicPhysicsSystem,
        InputSystem
    )
    {
        var requestAnimationFrame = window.requestAnimationFrame ||
                                    window.mozRequestAnimationFrame ||
                                    window.webkitRequestAnimationFrame ||
                                    window.msRequestAnimationFrame;
        var Engine = Class.derive({
            config: {
                    width: 800,
                    height: 600,
                    clearColor: "#000000",
                    backgroundColor: "#333333",
                    calcFPS: true,
                    showFPS: true,
                    style: {
                        border: "1px solid #666",
                        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
                        margin: "auto"
                    }
                },
            init: function(options)
                {
                    var me = this;
                    me.config = _.extend(me.config, options);
                    me.build();
                    me.systems = {
                        render: new RenderSystem(me.buffer),
                        physics: new BasicPhysicsSystem(),
                        input: new InputSystem(me.canvas)
                    };
                    Radio('registerEntity').subscribe([me.addEntity, me]);
                },
            addEntity: function(system, entity)
                {
                    var me = this;
                    if(system === null)
                        return;
                    if (me.systems.hasOwnProperty(system))
                    {
                        me.systems[system].add(entity);
                    }
                    else
                    {
                        console.log("WARNING: Tried to register entity to unknown system: " + system);
                    }
                },
            build: function()
                {
                    var me = this;
                    document.body.style.backgroundColor = me.config.backgroundColor;
                    me.container = document.createElement('div');
                    me.container.style.width = me.config.width + "px";
                    me.container.style.height = me.config.height + "px";
                    for (var prop in me.config.style)
                    {
                        me.container.style[prop] = me.config.style[prop];
                    }
                    me.canvas = document.createElement('canvas');
                    me.bufferCanvas = document.createElement('canvas');
                    me.buffer = me.bufferCanvas.getContext('2d');
                    me.canvas.width = me.bufferCanvas.width = me.config.width;
                    me.canvas.height = me.bufferCanvas.height = me.config.height;
                    me.container.appendChild(me.canvas);
                    document.body.appendChild(me.container);
                },
            update: function(elapsed)
                {
                    var me = this;
                    me.systems.input.update();
                    me.systems.physics.update(elapsed);
                },
            render: function()
                {
                    var me = this;
                    me.buffer.fillStyle = me.config.clearColor;
                    me.buffer.fillRect(0, 0, me.config.width, me.config.height);
                    me.systems.render.update();
                    if(me.config.calcFPS && me.config.showFPS)
                    {
                        me.buffer.fillStyle = "#FFFFFF";
                        me.buffer.fillText("FPS: " + me.fps.toFixed(2), 10, 20);
                    }
                    me.flip();
                },
            flip: function()
                {
                    var me = this;
                    me.canvas.getContext('2d').drawImage(me.buffer.canvas, 0, 0);
                },
            preload: function(assets)
                {
                    var counter = 0;
                    var response = function()
                    {
                        counter++;
                        var percentage = (counter/assets.length)*100;
                        if (counter == assets.length)
                        {
                            Radio('preloaderStateChanged').broadcast(true, percentage);
                        }
                        else
                        {
                            Radio('preloaderStateChanged').broadcast(false, percentage);
                        }
                    };
                    for (var idx = 0; idx < assets.length; idx++)
                    {
                        var container = new Image();
                        container.onload = response;
                        container.onerror = response;
                        container.onabort = response;
                        container.src = assets[idx];
                    }
                },
            start: function()
                {
                    var me = this;
                    _lastUpdate = 0;
                    if(me.config.calcFPS)
                    {
                        _lastFps = 0;
                        me.fps = 0;
                        _frameCount = 0;
                    }
                    var step = function(elapsed)
                    {
                        requestAnimationFrame(step);
                        me.render();
                        me.update(elapsed - _lastUpdate);
                        _lastUpdate = elapsed;

                        if (me.config.calcFPS)
                        {
                            _frameCount++;
                            if(_lastFps === 0)
                            {
                                _lastFps = elapsed;
                            }
                            if (elapsed - _lastFps > 200)
                            {
                                me.fps = (_frameCount / (elapsed - _lastFps))*1000;
                                _lastFps = elapsed;
                                _frameCount = 0;
                            }
                        }
                    };
                    step(_lastUpdate);
                }
        });
        return Engine;
    }
);