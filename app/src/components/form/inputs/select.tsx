type Option = {
    value: string,
    label: string,
}

type Props = {
    name: string,
    state: any,
    required?: boolean,
    disabled?: boolean,
    setState: Function,
    options: Option[]
}

export default function InputSelect({ name, state, setState, required = true, options, disabled = false }: Props) {
    return (
        <select name={name} onChange={e => setState(e.target.value)} required={required} disabled={disabled} className="outline-none p-1 border-2 rounded focus:border-blue-500 transition-all">
            <option value={undefined} selected={true} disabled={true}> Selecione a opção desejada</option>
            {options.map(option => <option value={option.value} selected={state === option.value}>{option.label}</option>)}
        </select>
    );
}