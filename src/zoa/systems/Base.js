define(
    [
        'zoa/Class'
    ],
    function(
        Class
    )
    {
        var BaseSystem = Class.derive({
            init: function()
                {
                    var self = this;
                },
            add: function(entity)
                {
                    var self = this;
                    var idx = 0;
                    for (idx = 0; idx < self.entities.length; idx++)
                    {
                        if (entity == self.entities[idx])
                        {
                            return;
                        }
                    }
                    for (idx = 0; idx < self.requiredProperties.length; idx++)
                    {
                        var prop = self.requiredProperties[idx];
                        if (!entity.hasOwnProperty(prop))
                        {
                            if (self.defaultProperties.hasOwnProperty(prop))
                            {
                                entity[prop] = self.defaultProperties[prop];
                            }
                            else
                            {
                                throw "Entity missing property '" + prop + "' and no default provided.";
                            }
                        }
                    }
                    self.entities.push(entity);
                },
            remove: function(entity)
                {
                    var self = this;
                    var idx = 0;
                    for (idx = 0; idx < self.entities.length; idx++)
                    {
                        if (entity == self.entities[idx])
                        {
                            break;
                        }
                    }
                    delete self.entities[idx];
                },
            update: function(elapsed)
                {
                    var self = this;
                },
            entities: [],
            requiredProperties: [],
            defaultProperties: {}
        });

        return BaseSystem;
    }
);