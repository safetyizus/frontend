import withLayout from "components/hocs/withLayout";

const Page = ({ id }) => {
    return <h1>View Invoice: {id}</h1>;
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withLayout(Page);
