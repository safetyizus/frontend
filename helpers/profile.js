import { api } from "./api";

export const getProfile = async (email) => {
    const response = await fetch(api`/users`);
    const json = await response.json();

    return json.find((profile) => profile.email === email);
};

export const getCurrentProfile = async (context) => {
    const session = await getSession(context.req, context.res);
    if (!session) return null;

    const profile = await getProfile(session.user.email);
    if (!profile) return null;

    return profile;
};
