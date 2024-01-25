import { Slime } from './Enemies.js';

const enemies = [Slime];



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

}

console.log(determineEnemies(enemies))

export function damage(giver, receiver){
    let x = Math.floor(Math.random() * 3)

    switch(x){
        case 0:
            receiever.hp = ((giver.damage) - (Math.floor(Math.random() * (giver.damage / 2) + 1)))
        case 1:
            let damageDealth
        
    }


    
    

}

