<script>
    import axios from "axios";
    import Show from "../lib/Show.svelte";
    import { taskStore } from "../store/Store";
    import { url } from "../URL";

    export let id;

    async function getData() {
        const res = await axios.get(url() + "briefs/" + id);
        taskStore.set(res.data);
        console.log(res.data);
        return res.data;
    }
    let promise = getData();
</script>

{#await promise}
    --- Loading ---
{:then}
    <div class="w-9/12 flex flex-wrap gap-2">
        {#each $taskStore.tasks as obj}
            <div
                class="flex flex-col justify-center items-center bg-white relative w-full lg:w-[23%] md:w-[31%] sm:w-[48%] px-6 py-8 border rounded-sm"
            >
                <h2>{obj.name_task}</h2>
                <p>{obj.descrip_task}</p>
            </div>
        {/each}
    </div>
{:catch err}
    {err}
{/await}
