import Head from "next/head";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
    return (
        <>
        <Head>
            <title>Next Tailwind Theme</title>
        </Head>
            <div>
                <NavBar/>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout;