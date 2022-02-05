import Header from "components/sections/Header";
import withLayout from "hocs/withLayout";

const Page = () => {
    return <Header title="Home Page" />;
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withLayout(Page);
