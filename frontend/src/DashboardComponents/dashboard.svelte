<script lang="ts">
   import { Tabs, Tab, TabContent } from "carbon-components-svelte";
   import { ProgressBar } from "carbon-components-svelte";
   import AutoDashboard from "./auto_dashboard.svelte";
   import SpecifiedDashboard from "./specified_dashboard.svelte";

   import { onMount } from "svelte";

   import { connected_status, dashboards } from "./dashboard_store.js";
   import { connect } from "./websocket_interface";

   setInterval(() => {
      if (!$connected_status) {
         try {
            connect();
         } catch {}
      }
   }, 1000);
</script>

<div id="header">
   <h4 class="PageTitle">Baja Dashboard</h4>
   <br />

   {#if $connected_status}
      <div>Connected to the Local DAQ Server</div>
      <br />
      <br />
      <br />
   {:else}
      <div>Disconnected from the Local DAQ Server</div>
      <ProgressBar width="100px" helperText="Connecting..." />
   {/if}

   <br />
</div>

<div class="dashboard" style="opacity:{connected_status ? 1 : 0.5}">
   <Tabs>
      <Tab label="Auto" />

      {#each $dashboards as dashboard}
         <Tab label={dashboard.name} />
      {/each}

      <Tab style="color:green" label="Add a Dashboard" />
      <div slot="content">
         <TabContent>
            <div>
               This dashboard tries to automatically figure out what sensors are
               being sent form the DAQ
            </div>
            <AutoDashboard />
         </TabContent>
         
         {#each $dashboards as dashboard}
            <TabContent>
               <SpecifiedDashboard dash_config={dashboard}/>
            </TabContent>
         {/each}
         

         <TabContent />
      </div>
   </Tabs>
</div>

<style>
   :global(#dashComp) {
      border-radius: 30px;

      margin: 30px;

      background-color: #ffff;
      padding: 30px;

      border-style: solid;
      border-width: 1px;
      border-color: #e0e0e0;
      
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
      background: #49b82d;
      background: -webkit-linear-gradient(to right, #49b82d 0%, #eaf72a 100%);
      background: -moz-linear-gradient(to right, #49b82d 0%, #eaf72a 100%);
      background: linear-gradient(to right, #49b82d 0%, #eaf72a 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }

   #header {
      padding-left: 30px;
      background-color: #ffffff;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='.5' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(13.35) translate(-925.09 -693.82)'%3E%3Cuse fill='%23fcfcfc' href='%23s' y='2'/%3E%3Cuse fill='%23fcfcfc' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='2'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(13.35) translate(-925.09 -693.82)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(13.35) translate(-925.09 -693.82)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(13.35) translate(-925.09 -693.82)'%3E%3Cg fill='%23f2f2f2'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(13.35) translate(-925.09 -693.82)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23efefef'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(13.35) translate(-925.09 -693.82)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(13.35) translate(-925.09 -693.82)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(13.35) translate(-925.09 -693.82)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
      background-attachment: fixed;
      background-size: cover;
   }
</style>
