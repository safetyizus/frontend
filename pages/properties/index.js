import Header from "components/sections/Header";
import withLayout from "components/hocs/withLayout";

const Page = () => {
    return (
        <Header
            title="Properties"
            actions={[{ href: "/properties/create", text: "Create New" }]}
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
