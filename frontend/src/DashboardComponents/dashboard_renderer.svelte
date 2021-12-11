<script>
    export let dash_config;
</script>

<br>
<div>Sensors: <b>{Object.keys(dash_config).join(", ")}</b></div>
<div class="dashboardContainer">
    
    {#each Object.keys(dash_config) as comp}
        <svelte:component
            this={dash_config[comp].viz}
            val={dash_config[comp].value}
            unit={dash_config[comp].unit}
            title={comp}
        />
    {/each}
</div>


<style>
    .dashboardContainer {
      display: flex;
      flex-wrap: wrap;
      margin-left: 30px;
   }
</style>