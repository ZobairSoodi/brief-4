<script>
    import axios from "axios";
    import { writable } from "svelte/store";
    import Show from "../lib/Show.svelte";
    import { url } from "../URL";

    export let id;
    let details = writable({
        id_br: "",
        name_br: "",
        descrip_br: "",
        date_start_br: "",
        date_end_br: "",
    });

    async function getData() {
        const res = await axios.get(url() + "briefs/" + id);
        details.set(res.data);
        console.log(res.data);
        return res.data;
    }
    let promise = getData();
</script>

{#await promise}
    --- Loading ---
{:then}
    <div class="w-10/12 bg-white rounded-sm px-10 py-10 border">
        <div class="flex items-center gap-5">
            <h1 class="text-2xl">{$details.name_br}</h1>
            <span>tasks</span>
        </div>
        <div>
            <p class="my-5">{$details.descrip_br}</p>
        </div>
        <div>
            <span>Start Date: {$details.date_start_br}</span>
            <span>End Date: {$details.date_end_br}</span>
        </div>
    </div>
{:catch err}
    {err}
{/await}
