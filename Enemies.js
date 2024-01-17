export class Slime{
    constructor(hp, damage, spells, drops){
        this.hp = 20 + 5(Player.level)
        this.damage = Math.floor(Math.random() * Math.Floor(20 * 1.3(Player.level)))
        drops = ["Goop"]
    }
}