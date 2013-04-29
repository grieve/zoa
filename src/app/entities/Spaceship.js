define(
	[
		'zoa/Entity',
		'zoa/components/basic/Geometry',
		'zoa/components/physics/Movement',
		'zoa/components/render/StaticGraphic',
		'zoa/components/control/WASDRelativeMovement',
		'zoa/components/control/LookAtMouse',
		'zoa/components/basic/WrappedBoundary'
	],
	function(
		Entity,
		GeometryComponent,
		MovementComponent,
		StaticGraphicComponent,
		WASDMovement,
		LookAtMouse,
		WrappedBoundary
	)
	{
		var Spaceship = Entity.derive({
			identifier: "Spaceship",
			init: function override(x, y)
				{
					var self = this;
					override.super.call(self);
					GeometryComponent.addTo(self, 32, 32, x, y);
					MovementComponent.addTo(self);
					StaticGraphicComponent.addTo(self, 'assets/gfx/ship.png');
					WASDMovement.addTo(self);
					LookAtMouse.addTo(self);
					WrappedBoundary.addTo(self, 0, 0, 800, 600);
					self.linearDamping = 0.96;
				},
			update: function(elapsed)
				{
					var self = this;
					console.log(self.velocity);
				}
		});
		return Spaceship;
	}
);