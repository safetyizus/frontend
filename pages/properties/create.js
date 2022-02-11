import Header from "sections/Header";
import withLayout from "hocs/withLayout";
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

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withLayout(Page);
