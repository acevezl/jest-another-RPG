const Enemy = require('../lib/Enemy.js');
const Potion = require('../lib/Potion.js');

jest.mock('../lib/Potion.js');

test ('Creates an enemy object', () => {
    const enemy = new Enemy('goblin','sword');

    expect(enemy.name).toBe('goblin');
    expect(enemy.weapon).toBe('sword');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));
});

test('Gets enemy\'s health value', () => {
    const enemy = new Enemy('Tucker','dildo');
    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});

test('Checks if enemy is alive or not', () => {
    const enemy = new Enemy('Hannity','lie');
    expect(enemy.isAlive()).toBeTruthy();

    enemy.health = 0;
    expect(enemy.isAlive()).toBeFalsy();
});

test("Gets enemy's attack value", () => {
    const enemy = new Enemy('Jeanine Pirro', 'scream');
    enemy.strength = 10;
  
    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});

test("Subtracts from enemy's health", () => {
    const enemy = new Enemy('Trump', 'fart');
    const oldHealth = enemy.health;

    enemy.reduceHealth(5);

    expect(enemy.health).toBe(oldHealth - 5);

    enemy.reduceHealth(99999);

    expect(enemy.health).toBe(0);
});

test("Gets a description of the enemy", () => {
    const enemy = new Enemy('Tucker','dildo');

    expect(enemy.getDescription()).toEqual(expect.stringContaining('Tucker'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('dildo'));
});