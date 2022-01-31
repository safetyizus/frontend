import withLayout from "hocs/withLayout";

const Page = () => {
    return <h1>Edit Account</h1>;
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withLayout(Page);
