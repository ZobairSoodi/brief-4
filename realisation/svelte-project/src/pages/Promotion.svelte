<script>
    import Show from "../lib/Show.svelte";
    import { promStore } from "../store/Store";
    import { promInputs } from "../lib/fields/promInputs";
    import { stuInputs } from "../lib/fields/stuInputs";
    import { writable } from "svelte/store";
    import EditModal from "../lib/modals/EditModal.svelte";
    import Open from "../lib/modals/Open.svelte";
    import AddModal from "../lib/modals/AddModal.svelte";
    let prom_inps = promInputs();
    let openEdit = writable({ hidden: true, id: null });
    let openAdd = writable({ hidden: true, id: null });
</script>

<div class="w-full">
    <h1>Promotions</h1>
    <Open openModal={openAdd} btn_text="Add New" />
    <div class="w-full flex justify-center">
        <Show {openEdit} table="promotions" inps={prom_inps} store={promStore} />
    </div>
    <AddModal
        open={openAdd}
        store={promStore}
        table="promotions"
        inputs={promInputs}
        width="w-11/12 md:w-3/4 lg:w-1/2"
    />
    <EditModal
        open={openEdit}
        store={promStore}
        table="promotions"
        inputs={promInputs}
        width="w-11/12 md:w-3/4 lg:w-1/2"
    />
</div>
