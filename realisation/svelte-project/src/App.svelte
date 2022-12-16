<script>
  import Brief from "./pages/Brief.svelte";
  import Promotion from "./pages/Promotion.svelte";
  import { Router, Route, Link, link, links } from "svelte-routing";
  import BriefDetails from "./pages/BriefDetails.svelte";
    import Task from "./pages/Task.svelte";
    import BriefTasks from "./pages/BriefTasks.svelte";
    import BriefStudents from "./pages/BriefStudents.svelte";
</script>

<div class="w-full min-h-screen flex flex-col items-center bg-[#F8F8F8]">
  <!-- <Promotion/> -->
  <!-- <Brief/> -->
  <nav class="">
    <a href="/briefs" use:link> briefs </a>
    <a href="/promotions" use:link> promotions </a>
  </nav>
  <Router>
    <Route path="briefs" component={Brief} />
    <Route path="tasks" component={Task} />
    <Route path="promotions" component={Promotion} />
    <Route path="briefs/:id/details" let:params>
      <BriefDetails id={params.id} />
    </Route>
    <Route path="briefs/:id/tasks" let:params>
      <BriefTasks id={params.id} />
    </Route>

  </Router>
</div>
