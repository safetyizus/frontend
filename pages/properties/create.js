import { getAuthProps } from "helpers/ssr";
import withLayout from "hocs/withLayout";

import Header from "sections/Header";
import PropertyForm from "sections/PropertyForm";

const Page = () => {
    return (
        <>
            <Header
                title="Create Property"
                crumbs={[
                    { href: "/", text: "Home" },
                    { href: "/properties", text: "Properties" },
                ]}
            />
            <PropertyForm />
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
