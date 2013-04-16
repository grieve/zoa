define(
    [
        'zoa/Class'
    ],
    function(
        Class
    )
    {
        var BaseComponent = Class.derive({
            __identifier__: 'base',
            __system__: 'base',
            __init__: function(a, b)
                {
                }
        });

        return BaseComponent;
    }
);