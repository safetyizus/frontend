import Header from "components/sections/Header";
import withLayout from "components/hocs/withLayout";
import { useRouter } from "next/router";
import PropertyForm from "components/sections/PropertyForm";

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

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withLayout(Page);
