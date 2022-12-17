<script>
    import axios from "axios";
    import { link } from "svelte-routing";
    import { writable } from "svelte/store";
    import Show from "../lib/Show.svelte";
    import { url } from "../URL";
    import BriefStudents from "./BriefStudents.svelte";

    export let id;
    let details = writable({
        id_br: "",
        name_br: "",
        descrip_br: "",
        date_start_br: "",
        date_end_br: "",
        image: "",
        tasks: [],
    });
    let percentage = 0;
    async function getData() {
        const res = await axios.get(url() + "briefs/" + id);
        let done = 0;
        res.data.tasks.forEach((el) => {
            if (el.state === 1) {
                done++;
            }
        });
        percentage = (done / res.data.tasks.length) * 100;
        details.set(res.data);
        console.log(res.data);
        return res.data;
    }
    let promise = getData();
</script>

{#await promise}
    --- Loading ---
{:then}
    <div class="w-9/12 bg-white rounded-sm px-10 py-8 border">
        <div class="flex items-center gap-5">
            <h1 class="text-2xl font-semibold">{$details.name_br}</h1>

            <a href="/briefs/{id}/tasks" use:link>
                <span>{$details.tasks.length} tasks</span>
            </a>
        </div>
        <div class="flex items-center gap-6 my-6">
            <div
                id="img_div"
                class="w-5/12 relative rounded-sm overflow-hidden"
            >
                {#if !$details.image}
                    <button
                        id="img"
                        class="w-full h-full flex items-center justify-center absolute -translate-y-full bg-black bg-opacity-40"
                    >
                        <span class="text-white">Add</span>
                    </button>
                {/if}
                <img
                    class="w-full"
                    src="/images/{$details.image || 'default_brief.png'}"
                    alt="brief"
                />
            </div>
            <p class="w-7/12">{$details.descrip_br}</p>
        </div>
        <div>
            <span>Start Date: {$details.date_start_br}</span>
            <span>End Date: {$details.date_end_br}</span>
        </div>
    </div>
{:catch err}
    {err}
{/await}

<div
    class="w-9/12 flex justify-center items-center bg-white rounded-sm mt-8 px-10 py-8 border"
>
    <span class="text-xl mr-5">Progress </span>
    <div class="w-1/2 h-8 bg-gray-400">
        <div
            class="h-8 flex justify-center items-center bg-green-600"
            style="width: {percentage + '%'}"
        >
            {percentage}%
        </div>
    </div>
</div>

<BriefStudents id={id} />

<style>
    #img {
        transition: all 0.3s;
    }
    #img_div:hover #img {
        transform: translateY(0);
    }
</style>
