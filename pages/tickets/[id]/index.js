import Header from "components/sections/Header";
import withLayout from "components/hocs/withLayout";

const Page = () => {
    return (
        <Header
            title="View Ticket"
            crumbs={[
                { href: "/", text: "Home" },
                { href: "/tickets", text: "Tickets" },
            ]}
        />
    );
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withAccount(withLayout(Page));
