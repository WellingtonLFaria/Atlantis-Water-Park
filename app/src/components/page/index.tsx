import Head from "next/head"

type Props = {
    children: any
}

export default function Page({ children }: Props) {
    return (
        <>
            <Head>
                <title>Atlantis Water Park</title>
            </Head>
            <div className="bg-white text-black h-full overflow-x-hidden flex flex-col">
                {children}
            </div>
        </>
    );
}