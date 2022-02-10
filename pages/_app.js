import { UserProvider } from "@auth0/nextjs-auth0";
import { GlobalStyle } from "components/styles/globals";
import Head from "next/head";
import { InterfaceProvider } from "contexts/InterfaceContext";

function App({ Component, pageProps }) {
    return (
        <UserProvider>
            <InterfaceProvider>
                <Head>
                    <link
                        href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
                        rel="stylesheet"
                    />
                </Head>
                <GlobalStyle />
                <Component {...pageProps} />
            </InterfaceProvider>
        </UserProvider>
    );
}

export default App;
