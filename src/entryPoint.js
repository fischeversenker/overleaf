define(function(require, exports, module)  {

    var Engine = require('marioEngine');
    var Player = require('entities/player');

    exports.init = function() {

        var core = Engine.getCore();
        core.setDOM($('#myCanvas'));

        var world = core.createWorld();
        //fill world
        var player = new Player();
        console.log(player);
        world.addEntity(player);
        world.addEntity(Engine.getEntityFactory().createEntity('SimpleShape'));
        // ...
        core.setActiveWorld(world);
        core.registerTicker(1, function() {});
        core.start();

    };
});
