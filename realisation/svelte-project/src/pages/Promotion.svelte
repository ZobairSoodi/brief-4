<script>
    import Show from "../lib/Show.svelte";
    import { promStore } from "../store/Store";
    import { promInputs } from "../lib/fields/promInputs";
    import { stuInputs } from "../lib/fields/stuInputs";
    import { writable } from "svelte/store";
    import EditModal from "../lib/modals/EditModal.svelte";
    import Open from "../lib/modals/Open.svelte";
    import AddModal from "../lib/modals/AddModal.svelte";
    import { each } from "svelte/internal";
    import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
    let prom_inps = promInputs();
    let openEdit = writable({ hidden: true, id: null });
    let openAdd = writable({ hidden: true, id: null });
</script>

<div class="w-11/12">
    <h1>Promotions</h1>
    <Open openModal={openAdd} btn_text="Add New" />
    <div class="w-full flex justify-center">
        <Show
            {openEdit}
            table="promotions"
            store={promStore}
            let:handleEdit
            let:handleDelete
        >
            <svelte:fragment slot="content">
                {#each $promStore as obj}
                    <div
                        class="flex flex-col justify-center items-center bg-white relative w-full lg:w-[23%] md:w-[31%] sm:w-[48%] px-6 py-8 border rounded-sm"
                    >
                        <h2>{obj.name_prom}</h2>
                        <img
                            class="w-1/2"
                            src="./images/{obj.image || 'default_picture.png'}"
                            alt="{obj.name_prom} image"
                        />
                        <div class="absolute flex top-2 right-2">
                            <button
                                class="text-green-700"
                                data-id={obj[prom_inps.id]}
                                on:click={handleEdit}
                            >
                                <Fa icon={faEdit} />
                            </button>
                            <button
                                class="text-red-700 ml-1"
                                data-id={obj[prom_inps.id]}
                                on:click={handleDelete}
                            >
                                <Fa icon={faTrashAlt} />
                            </button>
                        </div>
                    </div>
                {/each}
            </svelte:fragment>
        </Show>
    </div>
    <AddModal
        open={openAdd}
        store={promStore}
        table="promotions"
        inputs={promInputs}
        width="w-11/12 md:w-3/4 lg:w-6/12"
    />
    <EditModal
        open={openEdit}
        store={promStore}
        table="promotions"
        inputs={promInputs}
        width="w-11/12 md:w-3/4 lg:w-1/2"
    />
</div>
