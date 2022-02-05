import Header from "components/sections/Header";
import withLayout from "components/hocs/withLayout";

const Page = () => {
    return (
        <Header
            title="My Account"
            actions={[{ href: "/account/edit", text: "Edit Details" }]}
            crumbs={[
                { href: "/", text: "Home" },
                { href: "/account", text: "My Account" },
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
