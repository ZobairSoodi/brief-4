import { createState, useState } from '@hookstate/core';

const promStore = createState([]);

export default function usePromState() {
    const state = useState(promStore);
    return {
        get getProm() {
            return state.get();
        },
        setProm(list) {
            return state.set(() => [...list]);
        },
        addProm(obj) {
            return state.set((tasks) => [...tasks, obj]);
        },
        deleteProm(id) {
            return state.set((proms) => proms.filter((item) => item.id_prom !== id));
        },
        editProm(obj) {
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