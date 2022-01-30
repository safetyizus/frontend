import { useUser } from "@auth0/nextjs-auth0";
import withLayout from "components/hocs/withLayout";

const Page = () => {
    const user = useUser();

    return "Home Page";
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withLayout(Page);
