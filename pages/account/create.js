import Header from "components/common/Header";
import withLayout from "components/hocs/withLayout";

const Page = () => {
    return <Header title="Create Account" />;
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withLayout(Page);
