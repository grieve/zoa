define(
	[
		'zoa/Entity',
		'zoa/components/basic/Geometry',
		'zoa/components/physics/Movement',
		'zoa/components/render/StaticGraphic',
		'zoa/components/control/WASDAbsoluteMovement',
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
					var me = this;
					override.super.call(me);
					GeometryComponent.addTo(me, 32, 32, x, y);
					MovementComponent.addTo(me);
					StaticGraphicComponent.addTo(me, 'assets/gfx/ship.png');
					WASDMovement.addTo(me);
					LookAtMouse.addTo(me);
					WrappedBoundary.addTo(me, 0, 0, 800, 600);
					me.linearDamping = 0.96;
				},
			update: function(elapsed)
				{
					var me = this;
					console.log(me.velocity);
				}
		});
		return Spaceship;
	}
);