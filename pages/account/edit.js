import withLayout from "hocs/withLayout";
import { getAuthProps } from "helpers/ssr";

import Header from "sections/Header";
import AccountForm from "sections/AccountForm";

const Page = () => {
    return (
        <>
            <Header
                title="Edit Account"
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
    return {
        props: {},
    };
};

export const getServerSideProps = getAuthProps(getProps);

export default withLayout(Page);
