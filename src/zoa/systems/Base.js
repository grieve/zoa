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
                    var me = this;
                    me.entities = [];
                },
            add: function(entity)
                {
                    var me = this;
                    var idx = 0;
                    for (idx = 0; idx < me.entities.length; idx++)
                    {
                        if (entity == me.entities[idx])
                        {
                            return;
                        }
                    }
                    for (idx = 0; idx < me.requiredProperties.length; idx++)
                    {
                        var prop = me.requiredProperties[idx];
                        if (!entity.hasOwnProperty(prop))
                        {
                            if (me.defaultProperties.hasOwnProperty(prop))
                            {
                                entity[prop] = me.defaultProperties[prop];
                            }
                            else
                            {
                                throw "Entity missing property '" + prop + "' and no default provided.";
                            }
                        }
                    }
                    me.entities.push(entity);
                },
            remove: function(entity)
                {
                    var me = this;
                    var idx = 0;
                    for (idx = 0; idx < me.entities.length; idx++)
                    {
                        if (entity == me.entities[idx])
                        {
                            break;
                        }
                    }
                    delete me.entities[idx];
                },
            update: function(elapsed)
                {
                    var me = this;
                },
            entities: [],
            requiredProperties: [],
            defaultProperties: {}
        });

        return BaseSystem;
    }
);