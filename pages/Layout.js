import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <>
        <Head>
            <title>Next Tailwind Theme</title>
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