import Head from "next/head"

type Props = {
    children: any,
    className?: string
}

export default function Page({ children, className }: Props) {
    return (
        <>
            <Head>
                <title>Atlantis Water Park</title>
            </Head>
            <div className={"bg-white text-black overflow-x-hidden flex flex-col " + className}>
                {children}
            </div>
        </>
    );
}