<script>
    export let btn_text = "Open";
    export let openModal = {};
    const open = ()=>{
        openModal.set({hidden: false, id: null});
    }
</script>

<div>
    <button on:click={open}>
        {btn_text}
    </button>
</div>