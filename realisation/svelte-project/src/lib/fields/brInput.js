let half = "w-full md:w-[48%]";
let full = "w-full";
export function brInputs() {
    return {
        id: 'id_br',
        table: "brief",
        fields: [
            {
                element: "input",
                type: "text",
                name: "name_br",
                id: "name_br",
                placeholder: "Enter Brief Name",
                label: "Name",
                width: half
            },
            {
                element: "textarea",
                type: "text",
                name: "descrip_br",
                id: "descrip_br",
                placeholder: "Enter Brief Description",
                label: "Description",
                width: half
            },
            {
                element: "input",
                type: "date",
                name: "date_start_br",
                id: "date_start_br",
                placeholder: "",
                label: "Start Date",
                width: half
            },
            {
                element: "input",
                type: "date",
                name: "date_end_br",
                id: "date_end_br",
                placeholder: "",
                label: "End Date",
                width: half
            },
        ]
    }
}