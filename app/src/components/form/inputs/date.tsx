type Props = {
    name: string,
    state: any,
    required?: boolean,
    setState: Function
}

export default function InputDate({ name, state, setState, required = true }: Props) {
    return (
        <input className="border-2 p-1 hover:border-blue-500 transition-all outline-none rounded" type="date" name={name} value={state} onChange={e => setState(e.target.value)} required={required} />
    );
}