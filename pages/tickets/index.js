const Page = ({ id }) => {
    return <h1>List Tickets</h1>;
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default Page;
