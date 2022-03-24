import withLayout from "hocs/withLayout";
import { getAuthProps } from "helpers/ssr";

import Header from "sections/Header";
import AccountView from "sections/AccountView";

import Link from "elements/Link";
import Button from "elements/Button";

const Page = () => {
    return (
        <>
            <Header
                title="My Account"
                crumbs={[
                    { href: "/", text: "Home" },
                    { href: "/profile", text: "My Account" },
                ]}
            >
                <Link href="/api/auth/logout">
                    <Button theme="secondary">Log Out</Button>
                </Link>
                <Link href="/profile/edit">
                    <Button>Edit Details</Button>
                </Link>
            </Header>
            <AccountView />
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
