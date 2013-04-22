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
                    var self = this;
                    self.config = _.extend(self.config, options);
                    self.build();
                    self.systems = {
                        render: new RenderSystem(self.buffer),
                        physics: new BasicPhysicsSystem(),
                        input: new InputSystem(document)
                    };
                    Radio('registerEntity').subscribe([self.addEntity, self]);
                },
            addEntity: function(system, entity)
                {
                    var self = this;
                    if(system === null)
                        return;
                    if (self.systems.hasOwnProperty(system))
                    {
                        self.systems[system].add(entity);
                    }
                    else
                    {
                        console.log("WARNING: Tried to register entity to unknown system: " + system);
                    }
                },
            build: function()
                {
                    var self = this;
                    document.body.style.backgroundColor = self.config.backgroundColor;
                    self.container = document.createElement('div');
                    self.container.style.width = self.config.width + "px";
                    self.container.style.height = self.config.height + "px";
                    for (var prop in self.config.style)
                    {
                        self.container.style[prop] = self.config.style[prop];
                    }
                    self.canvas = document.createElement('canvas');
                    self.bufferCanvas = document.createElement('canvas');
                    self.buffer = self.bufferCanvas.getContext('2d');
                    self.canvas.width = self.bufferCanvas.width = self.config.width;
                    self.canvas.height = self.bufferCanvas.height = self.config.height;
                    self.container.appendChild(self.canvas);
                    document.body.appendChild(self.container);
                },
            update: function(elapsed)
                {
                    var self = this;
                    self.systems.input.update();
                    self.systems.physics.update(elapsed);
                },
            render: function()
                {
                    var self = this;
                    self.buffer.fillStyle = self.config.clearColor;
                    self.buffer.fillRect(0, 0, self.config.width, self.config.height);
                    self.systems.render.update();
                    if(self.config.calcFPS && self.config.showFPS)
                    {
                        self.buffer.fillStyle = "#FFFFFF";
                        self.buffer.fillText("FPS: " + self.fps.toFixed(2), 10, 20);
                    }
                    self.flip();
                },
            flip: function()
                {
                    var self = this;
                    self.canvas.getContext('2d').drawImage(self.buffer.canvas, 0, 0);
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
                    var self = this;
                    _lastUpdate = 0;
                    if(self.config.calcFPS)
                    {
                        _lastFps = 0;
                        self.fps = 0;
                        _frameCount = 0;
                    }
                    var step = function(elapsed)
                    {
                        requestAnimationFrame(step);
                        self.render();
                        self.update(elapsed - _lastUpdate);
                        _lastUpdate = elapsed;

                        if (self.config.calcFPS)
                        {
                            _frameCount++;
                            if(_lastFps === 0)
                            {
                                _lastFps = elapsed;
                            }
                            if (elapsed - _lastFps > 200)
                            {
                                self.fps = (_frameCount / (elapsed - _lastFps))*1000;
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