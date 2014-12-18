define(function(require, exports, module)  {
	var Engine = require('marioEngine');

	function Player() {

	}

	Player.prototype = Engine.getEntityFactory().createEntity('SimpleShape');
	Player.prototype.constructor = Player;
	Player.prototype.render = function() {
		this._parent.render();
	};

	module.exports = Player;
});
