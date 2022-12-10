<script>
    import Input from "../Input.svelte";
    import Fa from "svelte-fa";
    import { faXmark } from "@fortawesome/free-solid-svg-icons";
    import { beforeUpdate, onMount } from "svelte";
    import axios from "axios";
    import { url } from "../../URL";
    import { get, writable } from "svelte/store";
    import ModalBody from "./ModalBody.svelte";

    export let open;
    export let store;
    export let inputs;
    export let width;
    export let table;

    let formData = writable({});

    $: if ($open.id !== null) {
        getData();
    }

    async function getData() {
        let res = await axios.get(url() + table + "/" + $open.id);
        formData.set(res.data);
        console.log($formData);
    }

    const handleEdit = async () => {
        const res = await axios.put(url() + table + "/" + $open.id, $formData);
        if (res) {
            formData.set(res.data);
            let currentItem = $store.findIndex(
                (item) => item[inputs().id] == $open.id
            );
            console.log($open.id);
            $store[currentItem] = res.data;
        }
        console.log(res);
    };

    const closeModal = () => {
        open.set({ hidden: true, id: null });
        formData.set({});
    };
</script>

<ModalBody {open} {width} {formData}>
    <div slot="content">
        <h1 class="w-full flex justify-center text-3xl pb-4">
            Edit {inputs().table}
        </h1>
        <form
            on:submit|preventDefault={handleEdit}
            class="w-full flex flex-wrap justify-between"
        >
            {#each inputs().fields as inp}
                <Input
                    label={inp.label}
                    type={inp.type}
                    name={inp.name}
                    bind:value={$formData[inp.name]}
                    placeholder={inp.placeholder}
                    width={inp.width}
                />
            {/each}
            <div class="w-full flex justify-end gap-1 mt-2">
                <button
                    type="submit"
                    class="bg-green-700 text-white rounded-md px-3 py-1"
                    >Edit</button
                >
                <button
                    class="bg-red-700 text-white rounded-md px-3 py-1"
                    on:click={closeModal}>Cancel</button
                >
            </div>
        </form>
    </div>
</ModalBody>
