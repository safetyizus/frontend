import Header from "components/sections/Header";
import withLayout from "components/hocs/withLayout";
import withAccount from "components/hocs/withAccount";

const Page = ({ id }) => {
    return (
        <Header
            title="Edit Invoice"
            crumbs={[
                { href: "/", text: "Home" },
                { href: "/invoices", text: "Invoices" },
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
