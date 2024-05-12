
class Enemy {
    constructor(level, maxHP, damage, spells, drops) {
        this.level = level;
        this.maxHP = maxHP;
        this.hp = maxHP;
        this.damage = damage;
        this.spells = spells;
        this.drops = drops;
    }
}

export class Slime extends Enemy {
    constructor(level = 1) {
        const maxHP = 20 + Math.floor(Math.random() * 10 + 1) + 5 * (level - 1);
        const damage = Math.floor(Math.random() * 6 + 1.3 * level);
        const spells = [];
        const drops = ["Goop"];
        super(level, maxHP, damage, spells, drops);
    }
}

export const enemies = [Slime];
