import { useUser } from "@auth0/nextjs-auth0";

import { getProfile } from "helpers/profile";
import useAsync from "./useAsync";

const useProfile = () => {
    const { user } = useUser();
    const { data, error, loading } = useAsync(
        getProfile,
        [user?.email],
        [user]
    );

    return {
        user,
        profile: data ?? {},
        error,
        loading,
    };
};

export default useProfile;
