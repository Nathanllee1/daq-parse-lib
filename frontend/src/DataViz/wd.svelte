<script lang="ts">
    export let title:string;
    export let viz:any;
 </script>
 
 <div id="dashComp" class="wd">
    <div class="Title">{title}</div>
    <div class="vizCont">
       <svelte:component this={viz} />
    </div>
    
 </div>

<style>
   .wd {
      width: 780px;
      height: 360px;
      
   }
   
</style>