import withLayout from "hocs/withLayout";
import { getAuthProps } from "helpers/ssr";

import Header from "sections/Header";

import Link from "elements/Link";
import Button from "elements/Button";

const Page = () => {
    return (
        <Header
            title="Invoices"
            crumbs={[
                { href: "/", text: "Home" },
                { href: "/invoices", text: "Invoices" },
            ]}
        >
            <Link href="/invoices/create">
                <Button>Create New</Button>
            </Link>
        </Header>
    );
};

const getProps = async (context) => {
    return {
        props: {},
    };
};

export const getServerSideProps = getAuthProps(getProps);

export default withLayout(Page);
