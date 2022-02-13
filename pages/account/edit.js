import withLayout from "hocs/withLayout";
import withAccount from "hocs/withAccount";

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

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withAccount(withLayout(Page));
