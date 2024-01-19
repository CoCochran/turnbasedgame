import { initiateFight } from "./FightFunctions.js";
import { Slime } from './Enemies.js';
import { Player } from './Player.js';
import playerData from './Player.json' assert { type: "json" };



let slime = new Slime();
let enemies = [slime];
let player = new Player(playerData.hp, playerData.inventory, playerData.spells, playerData.level, playerData.exp)

initiateFight(enemies);