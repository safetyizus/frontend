import Header from "components/common/Header";
import withLayout from "components/hocs/withLayout";

const Page = () => {
    return (
        <Header
            title="Invoices"
            actions={[{ href: "/invoices/create", text: "Create New" }]}
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

export default withLayout(Page);
