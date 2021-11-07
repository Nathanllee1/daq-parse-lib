<script lang="ts">
   export let title:string;
   export let viz:any;
   export let val:number;
   export let unit:string;
</script>

<div id="dashComp" class="sm">
   <div class="Title">{title}</div>
   <div class="vizCont">
      <svelte:component this={viz} val={val} unit={unit} />
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
   
</style>