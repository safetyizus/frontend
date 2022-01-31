import Header from "components/common/Header";
import withLayout from "components/hocs/withLayout";

const Page = () => {
    return (
        <Header
            title="Create Property"
            crumbs={[
                { href: "/", text: "Home" },
                { href: "/properties", text: "Properties" },
            ]}
        />
    );
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withLayout(Page);
