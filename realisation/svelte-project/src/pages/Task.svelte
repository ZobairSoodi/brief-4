<script>
    import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
    import { writable } from "svelte/store";
    import { taskInputs } from "../lib/fields/taskInputs";
    import EditModal from "../lib/modals/EditModal.svelte";
    import Show from "../lib/Show.svelte";
    import { taskStore } from "../store/Store";

    let openEdit = writable({ hidden: true, id: null });
</script>

<div class="w-11/12">
    <div class="flex w-full justify-center items-center">
        <Show
            {openEdit}
            table="tasks"
            store={taskStore}
            let:handleEdit
            let:handleDelete
        >
            <svelte:fragment slot="content">
                {#each $taskStore as obj}
                    <div
                        class="flex flex-col justify-center items-center bg-white relative w-full lg:w-[23%] md:w-[31%] sm:w-[48%] px-6 py-8 border rounded-sm"
                    >
                        <h2>{obj.name_task}</h2>
                        <p>{obj.descrip_task}</p>
                        <div class="absolute flex top-2 right-2">
                            <button
                                class="text-green-700"
                                data-id={obj[taskInputs().id]}
                                on:click={handleEdit}
                            >
                                <Fa icon={faEdit} />
                            </button>
                            <button
                                class="text-red-700 ml-1"
                                data-id={obj[taskInputs().id]}
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
    <EditModal
    open={openEdit}
    store={taskStore}
    table="tasks"
    inputs={taskInputs}
    width="w-11/12 md:w-3/4 lg:w-1/2"
/>
</div>