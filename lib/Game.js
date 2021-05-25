const inquirer = require('inquirer');
const Enemy = require('../lib/Enemy');
const Player = require('../lib/Player');

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

Game.prototype.initializeGame = function() {
    this.enemies.push(new Enemy('Trump','fart'));
    this.enemies.push(new Enemy('Hannity','lies'));
    this.enemies.push(new Enemy('Ted Cruz','insurrection'));

    this.currentEnemy = this.enemies[0];

    inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: 'Hello Freedom Fighter, what is your name?'
    })
    // destructure name from the prompt object
    .then(({ name }) => {
        this.player = new Player(name);

        this.startNewBattle();
    });
};




module.exports = Game;