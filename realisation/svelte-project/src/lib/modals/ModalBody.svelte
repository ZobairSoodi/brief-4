<script>
    import Fa from "svelte-fa";
    import { faXmark } from "@fortawesome/free-solid-svg-icons";
    import { get, writable } from "svelte/store";

    export let open;
    export let width;

    export let formData;

    const closeModal = () => {
        open.set({ hidden: true, id: null });
        formData.set({});
    };

    const handleESC = (e) => {
        if (e.key === "Escape") {
            return closeModal();
        }
    };
</script>

{#if !$open.hidden}
    <div
        id="modal-body"
        class="w-full h-full flex justify-center items-center fixed bg-black bg-opacity-50 top-0 left-0"
        on:click|self={closeModal}
        on:keyup={handleESC}
    >
        <div
            class="{width} flex flex-col px-12 py-10 rounded-sm relative bg-white"
        >
            <slot name="content" />
            <button
                class="flex p-0 absolute top-2 right-3"
                on:click={closeModal}
                ><Fa icon={faXmark} class="text-gray-600 text-3xl font-bold" />
            </button>
        </div>
    </div>
{/if}
