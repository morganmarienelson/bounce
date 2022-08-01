import Head from "next/head";
import BounceHeading from "./BounceHeading";

const Layout = ({ children }) => {
    return (
        <>
        <Head>
            <title>Bounce</title>,
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