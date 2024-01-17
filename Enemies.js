export class Slime{
    constructor(level=(1), hp=(20 + 5 * level), damage=(Math.floor(Math.random() * (20 * 1.3 * level))), spells=[], drops=["Goop"]){
        this.level = level
        this.hp = hp
        this.damage = damage
        this.spells = spells
        this.drops = drops
    }
}