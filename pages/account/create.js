import { useUser } from "@auth0/nextjs-auth0";
import Layout from "wrappers/Layout";

const Page = () => {
    const { user } = useUser();

    console.log(user);

    return (
        <Layout>
            <h1>Create Account</h1>
        </Layout>
    );
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default Page;
