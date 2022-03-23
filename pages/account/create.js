import withLayout from "hocs/withLayout";
import { getAuthProps } from "helpers/ssr";
import { getCurrentProfile } from "helpers/profile";

import Header from "sections/Header";
import AccountForm from "sections/AccountForm";

const Page = () => {
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

const getProps = async (context) => {
    const currentProfile = await getCurrentProfile(context);
    if (currentProfile?.is_complete) {
        return {
            redirect: {
                destination: "/account/edit",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};

export const getServerSideProps = getAuthProps(getProps);

export default withLayout(Page);
