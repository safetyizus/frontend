import { getSession } from "@auth0/nextjs-auth0";

import { api } from "./api";

export const getProfile = async (email) => {
    if (!email) return {};

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

export const updateProfile = async (data) => {
    const options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: {
                ...data,
            },
        }),
    };

    try {
        const response = await fetch(api`/users/update`, options);
        return response;
    } catch (error) {
        console.log("Profile has not been updated successfully:", error);
        throw new Error(error);
    }
};
