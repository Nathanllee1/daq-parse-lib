<script lang="ts">


    import DashboardRenderer from "./dashboard_renderer.svelte";

    import { frame } from "./dashboard_store";

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

    export let dash_config;

</script>

<DashboardRenderer dash_config={dash_config} />
