import withLayout from "hocs/withLayout";
import { getAuthProps } from "helpers/ssr";

import Header from "sections/Header";

const Page = () => {
    return (
        <Header
            title="View Invoice"
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
