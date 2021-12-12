<script lang="ts">
    import {
        ComposedModal,
        ModalHeader,
        ModalBody,
        ModalFooter,
        Dropdown,
NotificationTextDetails
    } from "carbon-components-svelte";

    import { dashboards, dropdown, vizualizations, vizualization_objects } from "./dashboard_store";

    export let dash_index;

    let open: boolean = false;
    let checked: boolean = false;

    let sensor_index = 0;
    let viz_index = 0;

    const submit_card = () => {
        console.log("submitting", sensor_index, vizualization_objects[viz_index]);

        let dash_copy = $dashboards;
        dash_copy[dash_index]["sensors"].push({ 
            sensor: $dropdown[sensor_index].text,
            viz: $vizualization_objects[viz_index],
            unit: "e",
            value: 3
        })

        console.log(dash_copy);

        dashboards.set(dash_copy)
    }

</script>

<div id="add_card" on:click={() => (open = true)}>
    <h1>+ Add card</h1>
</div>

<ComposedModal bind:open on:submit={() => {open = false; submit_card()}}>
    <ModalHeader title="Add a Card" />
    <ModalBody hasForm>
        <Dropdown 
            titleText="Sensor"
            selectedIndex={sensor_index}
            items={$dropdown}
        />
        <Dropdown 
            titleText="Sensor"
            selectedIndex={viz_index}
            items={$vizualizations}
        />
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </ModalBody>
    <ModalFooter
        primaryButtonText="Proceed"
        secondaryButtonText = "Cancel"
        on:click:button--secondary={({ detail }) => {
            if (detail.text === "Cancel") open = false;

        }}
        

    />
</ComposedModal>

<style>
    #add_card {
        min-width: 360px;
        height: 360px;
        border-style: dashed;
        border-width: 3px;
        margin: 30px;
        border-radius: 30px;
        border-color: #e0e0e0;
        text-align: center;

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    #add_card:hover {
        border-color: #999999;
    }
</style>
