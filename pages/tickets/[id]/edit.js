import Header from "components/common/Header";
import withLayout from "components/hocs/withLayout";

const Page = () => {
    return <Header title="Edit Ticket" />;
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withLayout(Page);
