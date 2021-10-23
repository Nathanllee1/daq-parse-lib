<script lang="ts">
   import SM from "./sm.svelte";
   import WD from "./wd.svelte";
   import TA from "./ta.svelte";

   import Number from "../DataViz/number.svelte";
   import Graph from "../DataViz/graph.svelte";
   import Dial from "../DataViz/dial.svelte";
   import { onMount } from "svelte";

   let dash_config:object = {
      "bpFront": {
         size: SM,
         viz: Number,
         unit: "psi",
         value: 5
      },
      "bpBack": {
         size: SM,
         viz: Number,
         unit: "psi",
         value: 0
      }
   }

   let time = 0;

   const update_values = (cur_frame) => {
      time = cur_frame.time;
      delete cur_frame.time; // remove it to parse values

      let frame_keys: string[] = Object.keys(cur_frame);

      for (let i=0; i<frame_keys.length; i++) {
         dash_config[frame_keys[i]].value = cur_frame[frame_keys[i]];
      }
   }

   onMount(async () => {
		const socket = new WebSocket('ws://' + window.location.hostname + ":4000");

      // Connection opened
      socket.addEventListener('open', function (event) {
         socket.send('Hello Server!');
      })

      socket.addEventListener('message', function (event) {
         console.log('Message from server ', JSON.stringify(event.data));
         update_values(JSON.parse(event.data));
      });
	});


</script>

<h4 class="PageTitle">Baja Dashboard</h4>

<div class="dashboard">
   <h3>{time}</h3>
   <div class="dashboardContainer">
      {#each Object.keys(dash_config) as comp}
         <svelte:component this={dash_config[comp].size} val={dash_config[comp].value} unit={dash_config[comp].unit} 
            title={comp} viz={dash_config[comp].viz}/>
      {/each}
      
   </div>
</div>

<style>
   .dashboardContainer {
      display: flex;
      flex-wrap: wrap;
   }

   .btn {
      background-color: #54d334;
      border: #54d334;
      width: 140px;
      height: 40px;
   }

   :global(#dashComp) {
      border-radius: 30px;

      margin: 30px;

      background-color: #ffff;
      padding: 30px;

      border-style: solid;
      border-width: 1px;
      border-color: #ffff;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
         rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

   
   }

   :global(#dashComp:hover) {
      /*background-image: linear-gradient( #25ff80bd  ,#2a2e32 30%);*/
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
         rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
   }

   :global(.Title) {
      font-size: 30px;
      font-weight: medium;
      text-decoration: underline;
   }

   .PageTitle {
      font-size: 45px;
      margin-left: 30px;
      background: #49b82d;
      background: -webkit-linear-gradient(to right, #49b82d 0%, #eaf72a 100%);
      background: -moz-linear-gradient(to right, #49b82d 0%, #eaf72a 100%);
      background: linear-gradient(to right, #49b82d 0%, #eaf72a 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }
</style>
