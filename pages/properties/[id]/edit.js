import { useRouter } from "next/router";

import withLayout from "hocs/withLayout";
import { getAuthProps } from "helpers/ssr";

import Header from "sections/Header";
import PropertyForm from "sections/PropertyForm";

const Page = () => {
    const router = useRouter();

    return (
        <>
            <Header
                title="Edit Property"
                crumbs={[
                    { href: "/", text: "Home" },
                    { href: "/properties", text: "Properties" },
                ]}
            />
            <PropertyForm id={router.query.id} />
        </>
    );
};

const getProps = async (context) => {
    return {
        props: {},
    };
};

export const getServerSideProps = getAuthProps(getProps);

export default withLayout(Page);
