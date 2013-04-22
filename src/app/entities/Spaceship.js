define(
	[
		'zoa/Entity',
		'zoa/components/basic/Geometry',
		'zoa/components/physics/Movement',
		'zoa/components/render/StaticGraphic',
		'zoa/components/control/WASDMovement',
		'zoa/components/basic/WrappedBoundary'
	],
	function(
		Entity,
		GeometryComponent,
		MovementComponent,
		StaticGraphicComponent,
		WASDMovement,
		WrappedBoundary
	)
	{
		var Spaceship = Entity.derive({
			init: function override(x, y)
				{
					var self = this;
					override.super.call(self);
					GeometryComponent.addTo(self, 32, 32, x, y);
					MovementComponent.addTo(self);
					StaticGraphicComponent.addTo(self, 'assets/gfx/ship.png');
					WASDMovement.addTo(self);
					WrappedBoundary.addTo(self, 0, 0, 800, 600);
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