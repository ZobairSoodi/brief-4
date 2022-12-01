import { createState, useState } from '@hookstate/core';

const promStore = createState([]);

export default function usePromState() {
    const state = useState(promStore);
    return {
        get get() {
            return state.get();
        },
        set(list) {
            return state.set(() => [...list]);
        },
        add(obj) {
            return state.set((tasks) => [...tasks, obj]);
        },
        delete(id) {
            return state.set((proms) => proms.filter((item) => item.id_prom !== id));
        },
        edit(obj) {
            state.set((old) =>
                old.map((item) => {
                    if (item.id_prom == obj.id_prom) {
                        return { ...item, ...obj };
                    }
                    else {
                        return item;
                    }
                })
            )
        }
    }
}