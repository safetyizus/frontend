import Header from "components/common/Header";
import withLayout from "components/hocs/withLayout";

const Page = ({ id }) => {
    return <Header title="Edit Invoice" />;
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withLayout(Page);
