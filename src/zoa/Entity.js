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
                    self._components = [];
                },
            addComponent: function(component)
                {
                    var self = this;
                    self._components[component.prototype.__identifier__] = component.prototype;
                    for (var property in component.prototype)
                    {
                        if (property.indexOf('__') !== 0)
                        {
                            self[property] = component.prototype[property];
                        }
                    }
                    component.prototype.__init__.apply(self, [].slice.call(arguments, 1));
                    Radio('registerEntity').broadcast(component.prototype.__system__, self);
                }
        });
        return Entity;
    }
);