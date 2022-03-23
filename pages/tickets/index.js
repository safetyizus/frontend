import withLayout from "hocs/withLayout";
import { getAuthProps } from "helpers/ssr";

import Header from "sections/Header";

import Button from "elements/Button";
import Link from "elements/Link";

const Page = () => {
    return (
        <Header
            title="Tickets"
            crumbs={[
                { href: "/", text: "Home" },
                { href: "/tickets", text: "Tickets" },
            ]}
        >
            <Link href="/tickets/create">
                <Button>Create Ticket</Button>
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
