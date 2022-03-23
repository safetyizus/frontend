import { getAuthProps } from "helpers/ssr";
import withLayout from "hocs/withLayout";

import Header from "sections/Header";

const Page = () => {
    return (
        <Header
            title="Create Invoice"
            crumbs={[
                { href: "/", text: "Home" },
                { href: "/invoices", text: "Invoices" },
            ]}
        />
    );
};

const getProps = async (context) => {
    return {
        props: {},
    };
};

export const getServerSideProps = getAuthProps(getProps);

export default withLayout(Page);
