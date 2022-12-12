<script>
    import { writable } from "svelte/store";
    import { brInputs } from "../lib/fields/brInput";
    import AddModal from "../lib/modals/AddModal.svelte";
    import Open from "../lib/modals/Open.svelte";
    import Show from "../lib/Show.svelte";
    import { brStore } from "../store/Store";

    let openAdd = writable({ hidden: true, id: null });
</script>

<div class="w-11/12">
    <Open openModal={openAdd} btn_text="Add Brief" />
    <div class="flex w-full justify-center items-center">
        <Show store={brStore} table="briefs" openEdit="">
            <svelte:fragment slot="content">
                {#each $brStore as obj}
                    <div
                        class="flex flex-col bg-white relative w-full lg:w-[31%] md:w-[48%] sm:w-[48%] border rounded-sm"
                    >
                        <a href="briefs/{obj.id_br}/details"><img
                            class="w-full"
                            src="./images/{obj.image || 'default_brief.png'}"
                            alt="{obj.name_br} image"
                        /></a>
                        <a href="briefs/{obj.id_br}/details" class="p-5">
                            <h2 class="">{obj.name_br}</h2>
                            <p class="text-sm mt-5">{obj.descrip_br.length>120?obj.descrip_br.slice(0, 120)+"...":obj.descrip_br}</p>
                        </a>
                    </div>
                {/each}
            </svelte:fragment>
        </Show>
    </div>
    <AddModal store={brStore} inputs={brInputs} table="briefs" open={openAdd} />
</div>
