let half = "w-full md:w-[48%]";
let full = "w-full";
export function promInputs() {
    return {
        id: 'id_prom',
        table: "Promotion",
        fields: [
            {
                element: "input",
                type: "text",
                name: "name_prom",
                id: "name_prom",
                placeholder: "Enter Promotion Name",
                label: "Name",
                width: half,
            },
            {
                element: "input",
                type: "text",
                name: "descrip_prom",
                id: "descrip_prom",
                placeholder: "Enter Promotion Description",
                label: "Description",
                width: half,
            },
        ]
    }
}