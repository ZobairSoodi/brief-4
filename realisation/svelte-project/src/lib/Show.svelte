<script>
    import { url } from "../URL";
    import axios from "axios";

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
        <slot name="content" {handleEdit} {handleDelete} />
    </div>
    
{:catch err}
    <p>{err.message}</p>
{/await}
