export default function Input(props) {
    const inputEl = props.element === "input" ? (
        <input
            type={props.type}
            name={props.name}
            value={props.value}
            id={props.id}
            placeholder={props.placeholder}
            onChange={props.handleChange}
        />
    ): (
        <textarea name={props.name} value={props.value} onChange={props.handleChange}></textarea>
    );
    return (
        <label htmlFor={props.id}>
            <span>{props.label}</span>
            {inputEl}
        </label>
    )
}