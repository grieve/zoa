define(
	[
		'zoa/Entity',
		'zoa/components/Base'
	],
	function(
		Entity,
		TestComponent
	)
	{
		var Spaceship = Entity.derive({
			init: function override(x, y)
			{
				var self = this;
				override.super.call(self, 32, 32, 'assets/gfx/ship.png');
				self.x = x;
				self.y = y;
				self.addComponent(TestComponent, 1, 2);
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