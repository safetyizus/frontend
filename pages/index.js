import Header from "components/sections/Header";
import withLayout from "hocs/withLayout";
import withAccount from "hocs/withAccount";

const Page = () => {
    return <Header title="Home Page" />;
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withAccount(withLayout(Page));
