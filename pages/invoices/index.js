import withLayout from "components/hocs/withLayout";

const Page = () => {
    return <h1>List Invoices</h1>;
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withLayout(Page);
