<script>
  export let fight = false

  function toggleFight() {
    fight = !fight;
  }

</script>
<html lang="en" class="bg-gray-400 font-mono">
<div class="mx-[20%]">
  <div class="border-2 border-red-950 rounded-lg shadow-md shadow shadow-gray-500 py-3">

    <button on:click={toggleFight}>Toggle Condition</button>

{#if fight}
  <p>Condition is true, showing this paragraph.</p>
{/if}
    

  </div>
</div>
</html>