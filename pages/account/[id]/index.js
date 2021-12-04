const Page = ({ id }) => {
    return <h1>View Account: {id}</h1>;
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default Page;
