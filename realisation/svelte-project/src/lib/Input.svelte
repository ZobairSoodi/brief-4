<script>
    export let element = "input";
    export let label = "";
    export let type = "text";
    export let name = "";
    export let placeholder = "";
    export let value = "";
    export let width = "";
    let inp_class = "w-full h-10 rounded-md border-2 border-gray-300 p-1";

    const handleInput = (e) => {
        value = e.target.value;
    };
</script>

<label class="{width} flex flex-col justify-between items-start mt-3">
    <span class="w-full">{label}</span>
    {#if element == "textarea"}
        <textarea class={inp_class} {name} {value} {placeholder} on:input={handleInput}></textarea>
    {:else}
        <input class={inp_class} {type} {name} {value} {placeholder} on:input={handleInput} />
    {/if}
</label>
