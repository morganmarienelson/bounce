import Head from "next/head";
import BounceHeading from "./BounceHeading";

const Layout = ({ children }) => {
    return (
        <>
        <Head>
            <title>Next Tailwind Theme</title>
        </Head>
            <div>
                <BounceHeading/>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout;