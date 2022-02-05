import Header from "components/sections/Header";
import withLayout from "components/hocs/withLayout";
import CreateAccount from "components/sections/CreateAccount";

const Page = () => {
    return (
        <>
            <Header
                title="Create Account"
                crumbs={[
                    { href: "/", text: "Home" },
                    { href: "/account", text: "My Account" },
                ]}
            />
            <CreateAccount />
        </>
    );
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withLayout(Page);
