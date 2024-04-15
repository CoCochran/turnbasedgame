import { Slime } from './Enemies.js';

export const enemies = [Slime];

export let fight = false;



function determineEnemies(enemies){
    let fightEnemies = [];

    for (let i = 0; i < (Math.floor(Math.random() * 3) + 1); i++){
        let randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
        let enemy = new randomEnemy();
        fightEnemies.push(enemy);
    }

    return fightEnemies;

    
}
export function initiateFight(enemies){
    let fightEnemies = [];
    let enemyNumber = Math.floor(Math.random() * 3) + 1;
    console.log(enemyNumber);
    

    for (let i = 0; i < enemyNumber; i++){
        let enemyIndex = Math.floor(Math.random() * enemies.length);
        let slime = new Slime
        fightEnemies.push(enemies[enemyIndex]);

    }
    console.log(fightEnemies)
    return fightEnemies;
}

console.log(determineEnemies(enemies))

export function damage(giver, receiver){
    let x = Math.random() * 100

        if (x < 10){
            console.log("Miss");
            let damageDealt = 0;
        }
        else if (x > 10 && x < 50){
            let damageDealt = ((giver.damage) - (Math.floor(Math.random() * (giver.damage / 2) + 1)));
        }
        else if (x > 50 && x < 100) {
            let damageDealt = ((giver.damage) + (Math.floor(Math.random() * (giver.damage / 2) + 1)));

        }
        receiver.hp -= damageDealt;
        
}

export function heal(receiver, amount){
    if (amount > 0){
        receiver.hp += amount;
    }
}

export function enemyTurn(enemies){
    for (enemy in enemies){
        damage(enemy, player);
    }
}






