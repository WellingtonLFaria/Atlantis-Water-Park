type Props = {
    name: string,
    state: any,
    required?: boolean,
    setState: Function,
    disabled?: boolean
}

export default function InputDate({ name, state, setState, required = true, disabled = false }: Props) {
    return (
        <input className="border-2 p-1 hover:border-blue-500 transition-all outline-none rounded" type="date" name={name} value={state} onChange={e => setState(e.target.value)} required={required} disabled={disabled} />
    );
}