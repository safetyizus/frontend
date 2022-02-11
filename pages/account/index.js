import Link from "elements/Link";
import Button from "elements/Button";

import withLayout from "hocs/withLayout";

import Header from "sections/Header";
import AccountView from "sections/AccountView";

const Page = () => {
    return (
        <>
            <Header
                title="My Account"
                crumbs={[
                    { href: "/", text: "Home" },
                    { href: "/account", text: "My Account" },
                ]}
            >
                <Link href="/account/edit">
                    <Button>Edit Details</Button>
                </Link>
            </Header>
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
