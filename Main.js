import { initiateFight } from "./FightFunctions.js";
import { Slime } from './Enemies.js';

let slime = new Slime();
let enemies = [slime];

initiateFight(enemies);