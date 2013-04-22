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
        var BaseComponent = function(){};

        BaseComponent.prototype.init = function(){};

        BaseComponent.derive = function(def)
        {
            var classDef = function()
            {
                if (arguments[0] !== BaseComponent)
                {
                    this.__init__.apply(this, arguments);
                }
            };

            var proto = new this(BaseComponent);
            var superClass = this.prototype;

            for (var n in def)
            {
                var item = def[n];
                if (item instanceof Function) item.super = superClass[n];
                proto[n] = item;
                if (n == "__meta__" && superClass.hasOwnProperty(n))
                {
                    for (var mn in superClass[n])
                    {
                        if (!proto[n].hasOwnProperty(mn))
                        {
                            proto[n][mn] = superClass[n][mn];
                        }
                    }
                }
            }

            classDef.prototype = proto;
            classDef.derive = this.derive;
            classDef.addTo = this.addTo;
            return classDef;
        };

        BaseComponent.prototype.__meta__ = {
            identifier: 'BaseComponent',
            system: null,
            intents: [],
            requiredIntents: []
        };

        BaseComponent.prototype.__init__ = function(){};

        BaseComponent.addTo = function(target)
        {
            var component = this.prototype;
            var idx;
            for (idx = 0; idx < component.__meta__.requiredIntents.length; idx++)
            {
                if (!target._intents.hasOwnProperty(component.__meta__.requiredIntents[idx]))
                {
                    throw "Component '" + component.__meta__.identifier + "' requires intent '" + component.__meta__.requiredIntents[idx] + "' to work.";
                }
            }
            for (var property in component)
            {
                if (property.indexOf('__') !== 0)
                {
                    target[property] = component[property];
                }
            }
            for (idx = 0; idx < component.__meta__.intents.length; idx++)
            {
                target._intents[component.__meta__.intents[idx]] = component.__meta__.identifier;
            }

            component.__init__.apply(target, [].slice.call(arguments, 1));
            Radio('registerEntity').broadcast(component.__meta__.system, target);
        };

        return BaseComponent;
    }
);