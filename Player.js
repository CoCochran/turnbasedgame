export class Player{
    constructor(hp=25, inventory=[], spells=[], level=1, exp=0){
        this.hp = hp;
        this.inventory = inventory;
        this.spells = spells;
        this.level = level;
        this.exp = exp;
    }

}