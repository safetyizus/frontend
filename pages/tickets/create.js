import withLayout from "components/hocs/withLayout";

const Page = () => {
    return <h1>Create Ticket</h1>;
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withLayout(Page);
