type Props = {
    name: string,
    state: any,
    required?: boolean,
    disabled?: boolean,
    setState: Function
}
export default function InputText({ name, state, setState, required = true, disabled = false }: Props) {
    const onChange = (value: any) => {
        setState(value);
    }

    return (
        <input type="text" name={name} value={state} onChange={e => onChange(e.target.value)} className="p-1 border-2 rounded w-full outline-none focus:border-blue-500 text-neutral-700 transition-all" required={required} disabled={disabled} />
    );
}