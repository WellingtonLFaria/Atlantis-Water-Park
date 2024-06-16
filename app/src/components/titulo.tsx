
type Props = {
    className?: string,
    children: string
}
export default function Titulo({className, children}: Props) {
    return (
        <h1 className={`text-5xl font-bold ${className}`}>{children}</h1>
    );
}