define(
    [
        'zoa/Class'
    ],
    function(
        Class
    )
    {
        var BaseComponent = Class.derive({
            init: function(a, b)
            {
                var self = this;
                console.log(self);
                console.log(a);
                console.log(b);
            },
            testMethod: function(a, b)
            {
                console.log(a + b);
                console.log(this);
            }
        });

        return BaseComponent;
    }
);