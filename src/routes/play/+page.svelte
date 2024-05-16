<script>
  import { initiateFight, damage, heal, enemyTurn} from '../../scripts/FightFunctions'
  import { Slime, enemies } from '../../scripts/Enemies'

  let fight = false;
  let fightEnemies;
  export function toggleFight() {
    fight = !fight;
  }
</script>
<html lang="en" class="bg-gray-400 font-mono">
<div class="mx-[2%]">
  <div class="relative border-2 border-red-950 rounded-lg shadow-md shadow shadow-gray-500 py-3">

    <div class="flex justify-center py-[20%]">

{#if fight}
 let i = 0;
  {#each fightEnemies as enemy}
    <p class="px-5" id={`${i}`}>{enemy.maxHP}</p>
  {/each}
  <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-6">
   
    <button class="bg-red-800 text-3xl rounded-full px-6 py-2 my-1 text-white w-40" on:click={function(){
      console.log("attack")
      
    }}>
    Attack
  </button>

  <button class="bg-red-800 text-3xl rounded-full px-6 py-2 my-1 text-white w-40" on:click={function(){
    console.log("spells")
  }}>
  Spells
</button>

<button class="bg-red-800 text-3xl rounded-full px-6 py-2 my-1 text-white w-40" on:click={function(){
  console.log("items")
}}>
Items
</button>

<button class="bg-red-800 text-3xl rounded-full px-6 py-2 text-white w-40" on:click={function(){
  console.log("run")
}}>
Run
</button>

  </div>

  {:else}
    <button class="flex items-center justify-center mt-12 bg-red-800 text-3xl rounded-full px-5 py-2 text-white" on:click={function(){
      toggleFight();
      fightEnemies = initiateFight(enemies);
      console.log(fightEnemies[0].length);

    }}>
    Fight!
  </button>

{/if}

  </div>


    

  </div>
</div>
</html>