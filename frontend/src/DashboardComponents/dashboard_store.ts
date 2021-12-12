import { readable, writable } from 'svelte/store';
import Numbercard from "./numbercard.svelte";
export const connected_status = writable(false);

export const frame = writable({});

export const dashboards = writable([
    {
        name: "Test",
        description: "Test Dashboard",

        sensors: [
            {
                sensor: "time",
                viz: Numbercard,
                unit: "seconds",
                value: 0,
            },
            {
                sensor: "bpFront",
                viz: Numbercard,
                unit: "psi",
                value: 5,
            },
            {
                sensor: "bpBack",
                viz: Numbercard,
                unit: "psi",
                value: 0,
            }
        ]
    }
]);

async function fetch_data() {
    let res = await fetch("/config");
    let parse: Object = await res.json();

    sensors.set(parse["modules"]);

    let drop_data = [];

    parse["modules"].forEach((val, index) => {

        drop_data.push({
            text: val.name,
            id: index,
        })

    })

    dropdown.set(drop_data);
}

fetch_data();

export const sensors = writable([]);

export const dropdown = writable([]);

export const vizualizations = writable([{ id: 0, text: "Number" }])

export const vizualization_objects = writable([Numbercard])