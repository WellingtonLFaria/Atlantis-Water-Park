type Props = {
    children: string,
    className?: string
}

export default function FormSubtitulo({ className, children }: Props) {
    return (
        <h2 className={`text-xl text-neutral-700 ${className}`}>{children}</h2>
    );
}