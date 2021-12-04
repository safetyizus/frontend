const Page = ({ id }) => {
    return <h1>View Invoice: {id}</h1>;
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default Page;
