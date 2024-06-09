type Props = {
    className?: string,
    children: any,
    onSubmit: Function
}

export default function Form({ className, children, onSubmit }: Props) {
    return (
        <form onSubmit={e => onSubmit(e)} className={`flex flex-col border shadow rounded p-2 gap-5 ${className}`}>
            {children}
        </form>
    );
}