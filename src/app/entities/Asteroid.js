define(
	[
		'zoa/Entity',
		'zoa/components/basic/Geometry',
		'zoa/components/physics/Movement',
		'zoa/components/render/Drawing',
		'zoa/components/basic/WrappedBoundary'
	],
	function(
		Entity,
		GeometryComponent,
		MovementComponent,
		DrawingComponent,
		WrappedBoundary
	)
	{
		var Asteroid = Entity.derive({
			identifier: "Asteroid",
			init: function override(s, x, y)
				{
					var me = this;
					me.size = s / 2;
					override.super.call(me);
					GeometryComponent.addTo(me, s*1.2, s*1.2, x, y);
					MovementComponent.addTo(me);
					DrawingComponent.addTo(me);
					WrappedBoundary.addTo(me, 0, 0, 800, 600);
					me.generateShape();
					me.angularVelocity = (Math.random() - 0.5) * 5;
					me.velocity = [
						(Math.random() - 0.5) * 100,
						(Math.random() - 0.5) * 100
					];
				},
			generateShape: function override()
				{
					var me = this;
					var sides = 20;
					var randRange = me.size / 3;
					var center = me.width / 2;
					var ctx = me.graphic.getContext('2d');
					ctx.beginPath();
					ctx.moveTo(
						center + (me.size * Math.cos(0)) + (Math.random() - 0.5) * randRange,
						center + (me.size * Math.sin(0)) + (Math.random() - 0.5) * randRange
					);

					for (var i = 1; i <= sides; i++)
					{
						var variation = (Math.random() - 0.5) * randRange;
						ctx.lineTo(
							center + ((me.size + variation) * Math.cos(i * 2 * Math.PI / sides)),
							center + ((me.size + variation) * Math.sin(i * 2 * Math.PI / sides))
						);
					}

					ctx.strokeStyle = "#00FF00";
					ctx.lineWidth = 2;
					ctx.closePath();
					ctx.stroke();
				}
		});
		return Asteroid;
	}
);