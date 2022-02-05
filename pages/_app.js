import { UserProvider } from "@auth0/nextjs-auth0";
import { GlobalStyle } from "components/styles/globals";
import Head from "next/head";

function App({ Component, pageProps }) {
    return (
        <UserProvider>
            <Head>
                <link
                    href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
                    rel="stylesheet"
                />
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </UserProvider>
    );
}

export default App;
