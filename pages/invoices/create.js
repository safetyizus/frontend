const Page = () => {
    return <h1>Create Invoice</h1>;
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default Page;
