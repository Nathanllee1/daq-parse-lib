<script lang="ts">
    import { chart } from "svelte-apexcharts";

    let data = [3, 4, 6, 1, 15023400]

    var options = {
        series: [
            {
                data: data.slice(1),
            },
        ],
        chart: {
            id: "realtime",
            height: 350,
            type: "line",
            
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        title: {
            text: "Dynamic Updating Chart",
            align: "left",
        },
        markers: {
            size: 0,
        },
        xaxis: {
            type: "datetime",
            range: 34,
        },
        yaxis: {
            max: 100,
        },
        legend: {
            show: false,
        },
    };

</script>

<div class="graph">
    <div use:chart={options} />
</div>

<style>
    .graph {
        padding-top: 40px;
        margin-top: 20px;
        margin-right: 50px;
    }
</style>
