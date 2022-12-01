import { createState, useState } from '@hookstate/core';

const briefStore = createState([]);

export default function useBriefState() {
    const state = useState(briefStore);
    return {
        get get() {
            return state.get();
        },
        set(list) {
            return state.set(() => [...list]);
        },
        add(obj) {
            return state.set((current) => [...current, obj]);
        },
        delete(id) {
            return state.set((current) => current.filter((item) => item.id_br !== id));
        },
        edit(obj) {
            state.set((old) =>
                old.map((item) => {
                    if (item.id_br == obj.id_br) {
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