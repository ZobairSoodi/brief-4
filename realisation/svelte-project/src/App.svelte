<script>
  import Brief from "./pages/Brief.svelte";
  import Promotion from "./pages/Promotion.svelte";
  import { Router, Route, Link, link, links } from "svelte-routing";
  import BriefDetails from "./pages/BriefDetails.svelte";
</script>

<div class="w-full min-h-screen flex flex-col items-center bg-[#F8F8F8]">
  <!-- <Promotion/> -->
  <!-- <Brief/> -->
  <nav>
    <a href="/briefs" use:link> briefs </a>
    <a href="/promotions" use:link> prom </a>
    <a href="/briefs/1/details" use:link> brief details </a>
  </nav>
  <Router>
    <Route path="briefs" component={Brief} />
    <Route path="promotions" component={Promotion} />
    <Route path="briefs/:id/details" let:params>
      <BriefDetails id={params.id} />
    </Route>
  </Router>
</div>
