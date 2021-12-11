<script lang="ts">
   export let title: string;
   export let val: number;
   export let unit: string;
</script>

<div id="dashComp" class="sm">
   <div class="Title">{title}</div>
   <div class="vizCont">
      <div id="numberContainer">
         <div id="numberViz">{val}</div>
         <h4>{unit}</h4>
      </div>
   </div>
</div>

<style>
   .sm {
      min-width: 360px;
      height: 360px;
   }

   .vizCont {
      text-align: center;
   }

   #numberContainer {
      text-align: center;
      padding-top: 50px;
   }

   #numberViz {
      font-size: 150px;
      font-weight: bold;
      text-align: center;
   }

   h4 {
      margin-left: auto;
      font-size: 30px;
   }
</style>
