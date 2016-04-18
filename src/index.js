import GameState from 'states/GameState';

class Game extends Phaser.Game {

	constructor() {
		super(500, 500, Phaser.AUTO, 'content', null);
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');
	}

}

new Game();

var server = window.location.hostname + ':' + (window.location.port - 1)
var server = 'ws://192.168.99.100:32798/'

var conn = new WebSocket(server)
conn.onopen = () => console.log("Connection established!")
conn.onmessage = (e) => console.log(e.data)