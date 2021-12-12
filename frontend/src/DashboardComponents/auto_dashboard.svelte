<script lang="ts">
    import DashboardRenderer from "./dashboard_renderer.svelte";

    import { frame, sensors } from "./dashboard_store";

    import Numbercard from "./numbercard.svelte";

    let dash_config = { name: "Auto", sensors: [] };

    const update_values = (cur_frame) => {
        let frame_keys: string[] = Object.keys(cur_frame);

        for (let i = 0; i < Object.keys(frame).length; i++) {
            // if the sensor is note in the frame, add it in
            if (
                dash_config.sensors.some(
                    (e) => e.name === Object.keys(frame)[i]
                )
            ) {
                dash_config.sensors.push({
                    sensor: Object.keys(frame)[i],
                    viz: Numbercard,
                    value: cur_frame[Object.keys(frame)[i]],
                });
            } // else update it's value
            else {
                
            }
        }
    };

    frame.subscribe((value) => {
        update_values(value);
    });
</script>

<DashboardRenderer dash_config={dash_config} />
