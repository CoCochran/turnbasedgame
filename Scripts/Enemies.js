export class Slime{
    constructor(level=(1), hp=(20 + (Math.floor((Math.random() * 10) + 1)) + (5 * (level - 1))), damage=(Math.floor(Math.random() * 6 + (1.3 * level))), spells=[], drops=["Goop"]){
        this.level = level
        this.maxHP = hp
        this.hp = hp
        this.damage = damage
        this.spells = spells
        this.drops = drops
    }
}