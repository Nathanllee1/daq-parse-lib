import { writable } from 'svelte/store';
import Numbercard from "./numbercard.svelte";
export const connected_status = writable(false);

export const frame = writable({});

export const dashboards = writable([
    {
        name: "Test",
        description: "Test Dashboard",
        time: {
            viz: Numbercard,
            unit: "seconds",
            value: 0,
        },
        bpFront: {
            viz: Numbercard,
            unit: "psi",
            value: 5,
        },
        bpBack: {
            viz: Numbercard,
            unit: "psi",
            value: 0,
        }
    }
]);
