import Layout from "wrappers/Layout";

const Page = () => {
    return (
        <Layout>
            <h1>Edit Account: {id}</h1>
        </Layout>
    );
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default Page;
