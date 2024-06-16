type Props = {
    name: string,
    id: string,
    value: any,
    state: any,
    required?: boolean,
    disabled?: boolean,
    setState: Function
}

export default function InputRadio({ name, id, value, state, setState, required = true, disabled = false }: Props) {
    return (
        <input type="radio" name={name} id={id} value={value} checked={state === value} onChange={e => setState(e.target.value)} required={required} disabled={disabled} />
    );
}