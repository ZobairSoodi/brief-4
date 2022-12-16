let half = "w-full md:w-[48%]";
let full = "w-full";
export function taskInputs() {
    return {
        id: 'id_task',
        table: "task",
        fields: [
            {
                element: "input",
                type: "text",
                name: "name_task",
                id: "name_task",
                placeholder: "Enter Task Name",
                label: "Name",
                width: half
            },
            {
                element: "textarea",
                type: "text",
                name: "descrip_task",
                id: "descrip_task",
                placeholder: "Enter Task Description",
                label: "Description",
                width: half
            },
            {
                element: "input",
                type: "date",
                name: "date_start_task",
                id: "date_start_task",
                placeholder: "",
                label: "Start Date",
                width: half
            },
            {
                element: "input",
                type: "date",
                name: "date_end_task",
                id: "date_end_task",
                placeholder: "",
                label: "End Date",
                width: half
            },
            {
                element: "input",
                type: "hidden",
                name: "idd_br",
                id: "idd_br",
                placeholder: "",
                label: "",
                width: half
            },
        ]
    }
}