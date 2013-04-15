define(
	[
		'zoa/Entity'
	],
	function(
		Entity
	)
	{
		var Asteroid = Entity.derive({
			new: function(s, x, y)
				{
					var self = this;
					self.size = s / 2;
					arguments.callee.super.new.call(self, s*1.2, s*1.2);
					self.x = x;
					self.y = y;
					self.generateShape();
					self.angularVelocity = Math.random() - 0.5;
					self.velocity = [
						(Math.random() * 10) - 5,
						(Math.random() * 10) - 5
					];
				},
			generateShape: function()
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