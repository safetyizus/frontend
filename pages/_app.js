import { UserProvider } from "@auth0/nextjs-auth0";
import { GlobalStyle } from "components/styles/globals";

function App({ Component, pageProps }) {
    return (
        <UserProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </UserProvider>
    );
}

export default App;
