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
					var self = this;
					self.size = s / 2;
					override.super.call(self);
					GeometryComponent.addTo(self, s*1.2, s*1.2, x, y);
					MovementComponent.addTo(self);
					DrawingComponent.addTo(self);
					WrappedBoundary.addTo(self, 0, 0, 800, 600);
					self.generateShape();
					self.angularVelocity = (Math.random() - 0.5) * 5;
					self.velocity = [
						(Math.random() - 0.5) * 100,
						(Math.random() - 0.5) * 100
					];
				},
			generateShape: function override()
				{
					var self = this;
					var sides = 20;
					var randRange = self.size / 3;
					var center = self.width / 2;
					var ctx = self.graphic.getContext('2d');
					ctx.beginPath();
					ctx.moveTo(
						center + (self.size * Math.cos(0)) + (Math.random() - 0.5) * randRange,
						center + (self.size * Math.sin(0)) + (Math.random() - 0.5) * randRange
					);

					for (var i = 1; i <= sides; i++)
					{
						var variation = (Math.random() - 0.5) * randRange;
						ctx.lineTo(
							center + ((self.size + variation) * Math.cos(i * 2 * Math.PI / sides)),
							center + ((self.size + variation) * Math.sin(i * 2 * Math.PI / sides))
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