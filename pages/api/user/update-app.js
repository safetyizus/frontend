import { ManagementClient } from "auth0";

const { withApiAuthRequired, getSession } = require("@auth0/nextjs-auth0");

const handler = async (req, res) => {
    const session = await getSession(req, res);
    const id = session.user.sub;
    const accessToken = session.accessToken;

    try {
        const client = new ManagementClient({
            token: accessToken,
            domain: process.env.AUTH0_ISSUER_BASE_URL.replace("https://", ""),
            scope: process.env.AUTH0_SCOPE,
        });

        await client.updateAppMetadata({ id }, { test: "test" });

        res.status(200).json(req.body);
    } catch (error) {
        console.log(error);
        res.status(500).json({ statusCode: 500, message: error.message });
    }
};

export default withApiAuthRequired(handler);
