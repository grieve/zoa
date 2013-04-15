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
                    var self = this;
                    self.children = [];
                },
            update: function(elapsed)
                {
                    var self = this;
                    for (var idx = 0; idx < self.children.length; idx++)
                    {
                        self.children[idx].update(elapsed);
                    }
                },
            render: function(target)
                {
                    var self = this;
                    for (var idx = 0; idx < self.children.length; idx++)
                    {
                        self.children[idx].render(target);
                    }
                },
            add: function(child)
                {
                    var self = this;
                    for (var idx = 0; idx < self.children.length; idx++)
                    {
                        if (child == self.children[idx])
                            return;
                    }
                    self.children.push(child);
                },
            suspend: function()
                {
                    var self = this;
                    for (var idx = 0; idx < self.children.length; idx++)
                    {
                        Radio('deregisterEntity').broadcast('all', self.children[idx]);
                    }
                },
            destroy: function()
                {
                    var self = this;
                    for (var idx = 0; idx < self.children.length; idx++)
                    {
                        Radio('deregisterEntity').broadcast('all', self.children[idx]);
                        delete self.children[idx];
                    }
                    delete self.children;
                }
        });
        return Scene;
    }
);