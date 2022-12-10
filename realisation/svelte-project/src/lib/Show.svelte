<script>
    import { url } from "../URL";
    import axios from "axios";
    import Fa from "svelte-fa";
    import { faEdit, faPen, faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

    export let inps;
    export let table;
    export let store;
    export let openEdit;

    async function getData() {
        const res = await axios.get(url() + table);
        store.set(res.data);
        return res.data;
    }
    let promise = getData();

    const handleEdit = (e) => {
        let id = e.currentTarget.getAttribute("data-id");
        let obj = { hidden: false, id: id };
        openEdit.set(obj);
    };

    const handleDelete = async (e) => {
        if (confirm("Are you sure you want to delete this item?")) {
            let id = e.currentTarget.getAttribute("data-id");
            const res = await axios.delete(url() + table + "/" + id);
            if (res) {
                console.log("deleted successfully");
                store.delete(id);
            }
        }
    };
</script>

{#await promise}
    <p>... Loading ...</p>
{:then}
    <div class="flex flex-row flex-wrap justify-center w-4/5 gap-4">
        {#each $store as obj}
            <div
                class="g-white relative w-full lg:w-[23%] md:w-[31%] sm:w-[48%] px-6 py-8 border rounded-lg"
            >
                {#each inps.fields as inp}
                    <div>{inp.label}: {obj[inp.name]}</div>
                {/each}
                <div class="absolute flex top-2 right-2">
                    <button
                        class="text-green-700"
                        data-id={obj[inps.id]}
                        on:click={handleEdit}
                    >
                        <Fa icon={faEdit} />
                    </button>
                    <button
                        class="text-red-700 ml-1"
                        data-id={obj[inps.id]}
                        on:click={handleDelete}
                    >
                        <Fa icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        {/each}
    </div>
{:catch err}
    <p>{err.message}</p>
{/await}
