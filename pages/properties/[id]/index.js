import Header from "components/sections/Header";
import withLayout from "components/hocs/withLayout";

const Page = () => {
    return (
        <Header
            title="View Property"
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
