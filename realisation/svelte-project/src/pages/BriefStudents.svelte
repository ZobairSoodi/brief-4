<script>
    import axios from "axios";
    import { stuStore } from "../store/Store";
    import { url } from "../URL";

    export let id;

    async function getData() {
        const res = await axios.get(url() + "briefs/" + id + "/students");
        res.data.students.forEach(stu => {
            let count = 0;
            stu.tasks.forEach(task => {
                if(task.pivot.status == 1){
                    count++;
                }
            });
            stu.progress = Math.ceil((count / stu.tasks.length) * 100);
        });
        stuStore.set(res.data);
        console.log(res.data);
        return res.data;
    }
    let promise = getData();
    let progress = 0;
</script>

{#await promise}
    --- Loading ---
{:then}
    <div class="w-9/12 flex flex-wrap gap-2 mt-8">
        {#each $stuStore["students"] as obj}
        {@const progress = "w-[" + obj.progress + "%]"}
        
            <div
                class="flex flex-col justify-center items-center bg-white relative w-full lg:w-[23%] md:w-[31%] sm:w-[48%] px-6 py-8 border rounded-sm"
            >
                <h2>{obj.first_name}</h2>
                <p>{obj.last_name}</p>
                <div class="w-full h-5 bg-red-800">
                    <div class="{progress} h-5 bg-green-800">{obj.progress}%</div>
                </div>
            </div>
        {/each}
    </div>
{:catch err}
    {err}
{/await}
