<script>
    export let dash_config;
    export let dash_index = 0;

    import AddCard from "./add_card.svelte";
</script>

<br />
<div class="dashboardContainer">
    {#each dash_config.sensors as comp}
        <svelte:component
            this={comp.viz}
            val={comp.value}
            unit={comp.unit}
            title={comp.sensor}
        />
    {/each}

    {#if dash_config.name !== "Auto"}
        <AddCard dash_index={dash_index} />
    {/if}
</div>

<style>
    .dashboardContainer {
        display: flex;
        flex-wrap: wrap;
    }
</style>
