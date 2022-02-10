import withLayout from "hocs/withLayout";

import Header from "sections/Header";
import AccountView from "sections/AccountView";

const Page = () => {
    return (
        <>
            <Header
                title="My Account"
                actions={[{ href: "/account/edit", text: "Edit Details" }]}
                crumbs={[
                    { href: "/", text: "Home" },
                    { href: "/account", text: "My Account" },
                ]}
            />
            <AccountView />
        </>
    );
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withLayout(Page);
