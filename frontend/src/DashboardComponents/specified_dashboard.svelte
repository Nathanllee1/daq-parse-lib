<script lang="ts">
    import SM from "./sm.svelte";
    import WD from "./wd.svelte";
    import TA from "./ta.svelte";

    import DashboardRenderer from "./dashboard_renderer.svelte";

    import { frame } from "./frame_store";

    import Number from "../DataViz/number.svelte";

    const update_values = (cur_frame) => {
        let frame_keys: string[] = Object.keys(cur_frame);

        
        for (let i = 0; i < frame_keys.length; i++) {
            if (dash_config[frame_keys[i]])
                dash_config[frame_keys[i]].value = cur_frame[frame_keys[i]];
        }
    };

    frame.subscribe(value => {
        update_values(value);
    })

    let dash_config: object = {
        time: {
            size: SM,
            viz: Number,
            unit: "seconds",
            value: 0,
        },
        bpFront: {
            size: SM,
            viz: Number,
            unit: "psi",
            value: 5,
        },
        bpBack: {
            size: SM,
            viz: Number,
            unit: "psi",
            value: 0,
        },
        
    };

    
    
</script>

<DashboardRenderer dash_config={dash_config} />
