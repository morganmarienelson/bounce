import {MantineProvider, ColorSchemeProvider} from "@mantine/core";
import { useState} from "react";
import {getCookie, setCookies} from "cookies-next";
import { SessionProvider } from 'next-auth/react';
import {NextPageContext} from "next";
import Head from "next/head";

const MyApp = (props: any) => {
    const {Component, pageProps} = props;
    const [colorScheme, setColorScheme ] = useState(props.colorScheme);
    const toggleColorScheme = (value:any) => {
    const nextColorScheme = value || (colorScheme === "dark" ? 'light' : "dark" );
    setColorScheme(nextColorScheme);
    setCookies('mantine-color-scheme', nextColorScheme, {maxAge: 60*60*24*30});
    }

    return (
        <>
        <Head>
            <link rel="shortcut icon" href="/favicon/favicon.ico"/>
            <title>Bounce</title>,
        </Head>
        <SessionProvider session={props.session}>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider theme={{colorScheme}} withGlobalStyles withNormalizeCSS>
                    <Component {...pageProps} />
                </MantineProvider>
            </ColorSchemeProvider>
        </SessionProvider>
        </>

);
}

export const getServerSideProps = (ctx: NextPageContext) => ({
    colorScheme: getCookie('mantine-color-scheme', ctx) || 'n ',
})

export default MyApp;