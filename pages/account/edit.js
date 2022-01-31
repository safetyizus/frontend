import Header from "components/common/Header";
import withLayout from "components/hocs/withLayout";

const Page = () => {
    return (
        <Header
            title="Edit Account"
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
