define(
    [
        'zoa/Class'
    ],
    function(
        Class
    )
    {
        var Scene = Class.derive({
            new: function()
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
                }
        });
        return Scene;
    }
);