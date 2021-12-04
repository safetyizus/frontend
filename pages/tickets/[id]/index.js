const Page = ({ id }) => {
    return <h1>View Ticket: {id}</h1>;
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default Page;
