import withLayout from "hocs/withLayout";
import withAccount from "hocs/withAccount";

import Header from "sections/Header";
import { useEffect } from "react";
import { useRouter } from "next/router";

import AccountForm from "components/sections/AccountForm";
import useLocalStorage from "hooks/useLocalStorage";

const Page = () => {
    const router = useRouter();
    const [user, _] = useLocalStorage("siu_user", {});

    useEffect(() => {
        if (user?.is_complete) {
            router.push("/account/edit");
        }
    }, []);

    return (
        <>
            <Header
                title="Create Account"
                crumbs={[
                    { href: "/", text: "Home" },
                    { href: "/account", text: "My Account" },
                ]}
            />
            <AccountForm />
        </>
    );
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withAccount(withLayout(Page));
