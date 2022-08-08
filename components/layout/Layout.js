import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <>
        <Head>
            <title>Bounce</title>,
        </Head>
            <div>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout;