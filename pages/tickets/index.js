import Header from "sections/Header";
import withLayout from "hocs/withLayout";
import withAccount from "hocs/withAccount";
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

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withAccount(withLayout(Page));
