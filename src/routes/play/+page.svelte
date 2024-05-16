<script>
  import { initiateFight, damage, heal, enemyTurn} from '../../scripts/FightFunctions'
  import { Slime, enemies } from '../../scripts/Enemies'
  import { Player, createPlayer } from '../../scripts/Player'

  let fight = false;
  let fightEnemies;

  let player = createPlayer();
  export function toggleFight() {
    fight = !fight;
  }
  let selectedIndex = 0;
  let selectedElement = null;

  export function replyIndex(input){
    selectedIndex = input;
  }

  export function selectElement(index) {
        // Reset the class of the previously selected element, if any
        if (selectedElement) {
          selectedElement.classList.remove('border-2', 'border-red-950', 'rounded-lg', 'shadow-md', 'shadow', 'shadow-gray-500');
        }

        // Set the selected element to the clicked element
        selectedElement = document.getElementById(index);

        // Add a new class to the selected element
        selectedElement.classList.add('border-2', 'border-red-950', 'rounded-lg', 'shadow-md', 'shadow', 'shadow-gray-500');
    }
</script>

<html lang="en" class="bg-gray-400 font-mono">
<div class="mx-[2%]">
  <div class="relative border-2 border-red-950 rounded-lg shadow-md shadow shadow-gray-500 py-3">

    <div class="flex justify-center py-[20%]">
{#if fight}


  {#each fightEnemies as enemy, i}
  
  {#if fightEnemies[i].hp > 0}
  <div class='p-10' id='enemies'>
    <p class="p-5">{enemy.hp}</p>
    <button id={`${i}`} on:click={function(){
          selectElement(i);
          selectedIndex = i;

          
    }}>
    <img src={`img\\${fightEnemies[i].imgName}.webp`} alt="Description of the ">
  </button>       
  </div>
    {/if}
  {/each}
  <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-6">
   
    <button class="bg-red-800 text-3xl rounded-full px-6 py-2 my-1 text-white w-40" on:click={function(){
      fightEnemies[selectedIndex] = damage(player, fightEnemies[selectedIndex])
      console.log(fightEnemies[selectedIndex])
      
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

    }}>
    Fight!
  </button>

{/if}

  </div>


    

  </div>
</div>
</html>