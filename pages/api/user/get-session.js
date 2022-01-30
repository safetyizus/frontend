import { ManagementClient } from "auth0";

const { withApiAuthRequired, getSession } = require("@auth0/nextjs-auth0");

const handler = async (req, res) => {
    const session = await getSession(req, res);
    res.status(200).json(session);
};

export default withApiAuthRequired(handler);
