import Header from "components/common/Header";
import withLayout from "components/hocs/withLayout";

const Page = () => {
    return (
        <Header
            title="Tickets"
            actions={[{ href: "/tickets/create", text: "Create Ticket" }]}
        />
    );
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withLayout(Page);
