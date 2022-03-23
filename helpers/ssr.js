import { getSession } from "@auth0/nextjs-auth0";
import { Router } from "next/router";
import { getProfile } from "./profile";

export const buildGetPropsWrapper = (getNextProps) => {
    return (getPrevProps) => {
        return async (context) => {
            const prevValues = await getPrevProps(context);
            const nextValues = await getNextProps(context);

            const values = {
                notFound: prevValues?.notFound || nextValues?.notFound,
                redirect: prevValues?.redirect ?? nextValues?.redirect ?? null,
                props: {
                    ...(prevValues?.props ?? {}),
                    ...(nextValues?.props ?? {}),
                },
            };

            return Object.keys(values)
                .filter((key) => !!values[key])
                .reduce((obj, key) => ({ ...obj, [key]: values[key] }), {});
        };
    };
};

export const getAuthProps = buildGetPropsWrapper(async (context) => {
    const session = await getSession(context.req, context.res);

    if (!session) {
        return {
            redirect: {
                destination: "/api/auth/login",
                permenant: false,
            },
        };
    }

    const profile = await getProfile(session.user.email);

    if (
        !context.resolvedUrl.includes("/account/create") &&
        !profile.is_complete
    ) {
        return {
            redirect: {
                destination: "/account/create",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
});
