<script lang="ts">
   import SM from "./sm.svelte";
   import WD from "./wd.svelte";
   import TA from "./ta.svelte";

   import Number from "../DataViz/number.svelte";
   import Graph from "../DataViz/graph.svelte";

   const dash_config:object = {
      sensor: "1",

   }

   let curNum:number = 30;

   setInterval(() => {
      curNum = Math.floor(Math.random() * 100) 
   }, 500)

</script>

<h4 class="PageTitle">The Dashboard</h4>
<button class="btn">Here's a button</button>

<div class="dashboard">
   <div class="dashboardContainer">
      <SM title={"Test number"} viz={Number} val={curNum} />
      
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
