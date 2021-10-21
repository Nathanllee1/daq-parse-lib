<script lang="ts">
   export let val:number;
</script>

<div id="numberContainer">
   <div id="numberViz">{val}</div>
   <h4>Miles an hour</h4>
</div>


<style>
   #numberContainer {
      text-align: center;
      padding-top: 50px;

   }

   #numberViz {
      font-size:150px;
      font-weight: bold;
      text-align: center;
      
   }

   h4 {
      margin-left:auto;
      font-size: 30px;
   }
</style>