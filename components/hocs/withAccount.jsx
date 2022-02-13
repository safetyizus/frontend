import { withApiAuthRequired, withPageAuthRequired } from "@auth0/nextjs-auth0";
import useLocalStorage from "hooks/useLocalStorage";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const withAccount = (Component) => {
    const WrappedComponent = (props) => {
        const [user, _] = useLocalStorage("siu_user", {});
        const router = useRouter();

        useEffect(() => {
            const isAccountCreatePage = router.pathname === "/account/create";
            const isAccountIncomplete = !user?.is_complete;

            if (!isAccountCreatePage && isAccountIncomplete) {
                router.push("/account/create");
            }
        }, []);

        return <Component {...props} />;
    };

    return withPageAuthRequired(WrappedComponent);
};

export default withAccount;
