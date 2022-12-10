import { writable } from "svelte/store";

function GlobalStore(table_id) {
    const {subscribe, set, update} = writable([]);

    return {
        subscribe,
        set,
        update,
        add: (obj) => { update(current => [...current, obj]) },
        delete: (id) => { update(current => current.filter(item => item[table_id] != id)) }
    }
}

export const promStore = GlobalStore("id_prom");
export const stuStore = writable([]);
