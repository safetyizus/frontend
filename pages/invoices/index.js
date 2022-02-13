import Header from "sections/Header";
import withLayout from "hocs/withLayout";
import withAccount from "hocs/withAccount";

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

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withAccount(withLayout(Page));
