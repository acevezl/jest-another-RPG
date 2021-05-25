const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];

}

Player.prototype.getStats = function() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

Player.prototype.getInventory = function() {
    return this.inventory.length ? this.inventory : false;
};

Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
}

Player.prototype.isAlive = function() {
    return this.health === 0 ? false : true;
}

Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min );
}

Player.prototype.reduceHealth = function(health) {
    this.health -= (health > this.health) ? this.health : health;
}

module.exports = Player;