import { api } from "./api";

export const getProfile = async (email) => {
    const response = await fetch(api`/users`);
    const json = await response.json();

    return json.find((profile) => profile.email === email);
};
