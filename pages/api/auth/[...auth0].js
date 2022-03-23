import { handleAuth, handleLogin, initAuth0 } from "@auth0/nextjs-auth0";

const auth = initAuth0({
    clientID: process.env.AUTH0_CLIENT_ID,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    baseURL: process.env.AUTH0_BASE_URL,
    secret: process.env.AUTH0_SECRET,
    clientSecret: process.env.AUTH0_SECRET,
    authorizationParams: {
        response_type: "code",
        scope: "openid profile email",
    },
});

export default auth.handleAuth();
