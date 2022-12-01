export default function BriefInputs() {
    return [
        {
            element: "input",
            type: "text",
            name: "name_br",
            id: "name_br",
            placeholder: "Enter Brief Name",
            label: "Name"
        },
        {
            element: "input",
            type: "text",
            name: "descrip_br",
            id: "descrip_br",
            placeholder: "Enter Brief Description",
            label: "Description"
        },
        {
            element: "input",
            type: "date",
            name: "date_start_br",
            id: "date_start_br",
            placeholder: "",
            label: "Start Date"
        },
        {
            element: "input",
            type: "date",
            name: "date_end_br",
            id: "date_end_br",
            placeholder: "",
            label: "End Date"
        }
    ]
}