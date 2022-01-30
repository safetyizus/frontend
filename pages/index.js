import { useUser } from "@auth0/nextjs-auth0";
import { useEffect } from "react";
import Layout from "wrappers/Layout";

const Page = () => {
    const user = useUser();

    return (
        <Layout>
            <a href="/api/auth/login">Login</a>
            <a href="/api/auth/logout">Logout</a>
        </Layout>
    );
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default Page;
