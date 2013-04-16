define(
	[
		'zoa/Entity',
		'zoa/components/Geometry',
		'zoa/components/StaticGraphic'
	],
	function(
		Entity,
		GeometryComponent,
		StaticGraphicComponent
	)
	{
		var Spaceship = Entity.derive({
			init: function override(x, y)
				{
					var self = this;
					override.super.call(self);
					self.addComponent(GeometryComponent, 32, 32, x, y);
					self.addComponent(StaticGraphicComponent, 'assets/gfx/ship.png');
				},
			update: function(elapsed)
				{
					var self = this;
					document.body.onkeydown = function(evt)
					{
						console.log(evt.keyCode);
						switch(evt.keyCode)
						{
							case 37: //left
								self.x -= 10;
								break;
							case 38: //up
								self.y -= 10;
								break;
							case 39: //right
								self.x += 10;
								break;
							case 40: //down
								self.y += 10;
								break;
						}
					};
				}
		});
		return Spaceship;
	}
);