define(
    [
        'zoa/components/Base'
    ],
    function(
        BaseComponent
    )
    {
        var RenderComponent = BaseComponent.derive({
            __meta__: {
                    identifier: 'RenderComponent',
                    system: 'render',
                    intents: ['isRenderable'],
                    requiredIntents: ['hasGeometry']
                },
            __init__: function(imgURL)
                {
                    var me = this;
                    me.graphic = null;
                },
            render: function(target)
                {
                    var me = this;
                    if (me.x + me.width < 0 ||
                        me.y + me.height < 0 ||
                        me.x > 800 ||
                        me.y > 600)
                    {
                        return;
                    }
                    target.save();
                    target.translate(me.halfWidth, me.halfHeight);
                    target.translate(me.x, me.y);
                    target.rotate(me.rotation);
                    target.drawImage(
                        me.graphic,
                        0,
                        0,
                        me.width,
                        me.height,
                        -me.halfWidth,
                        -me.halfHeight,
                        me.width,
                        me.height
                    );
                    target.restore();
                }
        });

        return RenderComponent;
    }
);