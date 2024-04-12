<script>
  import { enemies, initiateFight, damage, heal, enemyTurn} from '../../scripts/FightFunctions'
  let fight = false;
  export function toggleFight() {
    fight = !fight;
  }
</script>
<html lang="en" class="bg-gray-400 font-mono">
<div class="mx-[2%]">
  <div class="border-2 border-red-950 rounded-lg shadow-md shadow shadow-gray-500 py-3">

    <div class="flex justify-center py-[20%]">

{#if fight}
  <p>Condition is true, showing this paragraph.</p>
  <div class="flex">
    <button on:click={toggleFight} class="flex align-bottom">Toggle Condition</button>
  </div>



 
    

  {:else}
    <button class="flex items-center justify-center mt-12 bg-red-800 text-3xl rounded-full px-5 py-2 text-white" on:click={function(){
      toggleFight();
      initiateFight(enemies)
    }}>
    Fight!
  </button>

{/if}

  </div>


    

  </div>
</div>
</html>