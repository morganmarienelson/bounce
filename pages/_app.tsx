import Layout from "../components/layout";
import {MantineProvider, ColorSchemeProvider} from "@mantine/core";
import { useState} from "react";
import {getCookie, setCookies} from "cookies-next";
import { SessionProvider } from 'next-auth/react';
import {NextPageContext} from "next";

const MyApp = (props: any) => {
    const {Component, pageProps} = props;
    const [colorScheme, setColorScheme ] = useState(props.colorScheme);
    const toggleColorScheme = (value:any) => {
    const nextColorScheme = value || (colorScheme === "dark" ? 'light' : "dark" );
    setColorScheme(nextColorScheme);
    setCookies('mantine-color-scheme', nextColorScheme, {maxAge: 60*60*24*30});
    }

    return (
        <SessionProvider session={props.session}>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <Layout>
                <MantineProvider theme={{colorScheme}} withGlobalStyles withNormalizeCSS>
                    <Component {...pageProps} />
                </MantineProvider>
                </Layout>
            </ColorSchemeProvider>
        </SessionProvider>

);
}

export const getServerSideProps = (ctx: NextPageContext) => ({
    colorScheme: getCookie('mantine-color-scheme', ctx) || 'n ',
})

export default MyApp;