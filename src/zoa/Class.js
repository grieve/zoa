define(
	[],
	function()
	{
		var Class = function(){};

		Class.prototype.new = function(){};

		Class.derive = function(def)
		{
			var classDef = function()
			{
				if (arguments[0] !== Class)
				{
					this.new.apply(this, arguments);
				}
			};

			var proto = new this(Class);
			var superClass = this.prototype;

			for (var n in def)
			{
				var item = def[n];                      
				if (item instanceof Function) item.super = superClass;
				proto[n] = item;
			}

			classDef.prototype = proto;  
			classDef.derive = this.derive;      
			return classDef;
		};
		return Class;
	}
);