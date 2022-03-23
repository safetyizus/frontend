import withLayout from "hocs/withLayout";
import { getAuthProps } from "helpers/ssr";

import Header from "sections/Header";

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

const getProps = async (context) => {
    return {
        props: {},
    };
};

export const getServerSideProps = getAuthProps(getProps);

export default withLayout(Page);
