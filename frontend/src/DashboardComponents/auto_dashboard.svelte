<script lang="ts">

    import DashboardRenderer from "./dashboard_renderer.svelte";

    import { frame } from "./dashboard_store";

    import Numbercard from "./numbercard.svelte";

    let dash_config: object = {};

    const update_values = (cur_frame) => {
        let frame_keys: string[] = Object.keys(cur_frame);

        for (let i = 0; i < frame_keys.length; i++) {

            if (!dash_config[frame_keys[i]]) { // if it's not in the dash_config, add it in
                dash_config[frame_keys[i]] = {
                    viz: Numbercard,
                    unit: "",
                    value: cur_frame[frame_keys[i]]
                }
            }

            dash_config[frame_keys[i]].value = cur_frame[frame_keys[i]];
        }

        console.log(dash_config);
    };

    frame.subscribe(value => {
        update_values(value);
    })

</script>

<DashboardRenderer dash_config={dash_config} />
