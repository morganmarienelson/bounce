import Head from "next/head";

const Layout = ( props: any ) => {
    return (
        <>
        <Head>
            <title>Bounce</title>,
        </Head>
            <div>
                <main>
                    {props.children}
                </main>
            </div>
        </>
    )
}

export default Layout;