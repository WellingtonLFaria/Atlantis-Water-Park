type Props = {
    children: any,
    className?: string,
    flexCol?: boolean
}

export default function Field({ children, className, flexCol = true }: Props) {
    return (
        <div className={`p-1 flex ${flexCol ? "flex-col" : "flex-row"} ${className}`}>
            {children}
        </div>
    );

}