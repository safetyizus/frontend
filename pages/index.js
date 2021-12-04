import Layout from "wrappers/Layout";

const Page = () => {
    return (
        <Layout>
            <h1>Home Page</h1>
        </Layout>
    );
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default Page;
