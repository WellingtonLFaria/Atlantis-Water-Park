import { MouseEventHandler } from "react";

type Props = {
    tipo?: string,
    type?: "submit" | "reset" | "button",
    onClick: MouseEventHandler,
    children?: string
}

export default function Button({ tipo, type, onClick, children }: Props) {
    switch (tipo) {
        case "submit":
            return (
                <button type={type} onClick={onClick} className="p-1 rounded font-bold bg-green-500 hover:bg-green-400 hover:scale-105 transition-all w-fit shadow">{children}</button>
            );
        case "delete":
            return (
                <button onClick={onClick} className="p-1 rounded font-bold bg-red-500 hover:bg-red-400 hover:scale-105 transition-all w-fit shadow">{children}</button>
            )
        case "update":
            return (
                <button onClick={onClick} className="p-1 rounded font-bold bg-sky-500 hover:bg-sky-400 hover:scale-105 transition-all w-fit shadow">{children}</button>
            )
        default:
            return (
                <button onClick={onClick} className="p-1 rounded font-bold bg-neutral-300 hover:bg-neutral-200 hover:scale-105 transition-all w-fit shadow">{children}</button>
            )
    }

}