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
                    for (var idx in self.children)
                    {
                        self.children[idx].update(elapsed);
                    }
                },
            render: function(target)
                {
                    var self = this;
                    for (var idx in self.children)
                    {
                        self.children[idx].render(target);
                    }
                },
            add: function(child)
                {
                    var self = this;
                    for (var idx in self.children)
                    {
                        if (child == self.children[idx])
                            return;
                    }
                    self.children.push(child);
                    Radio('registerEntity').broadcast('render', child);
                }
        });
        return Scene;
    }
);