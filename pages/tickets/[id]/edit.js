const Page = ({ id }) => {
    return <h1>Edit Ticket: {id}</h1>;
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default Page;
