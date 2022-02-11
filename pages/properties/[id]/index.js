import Header from "sections/Header";
import PropertyView from "sections/PropertyView";

import withLayout from "hocs/withLayout";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "components/elements/Button";

const Page = () => {
    const router = useRouter();

    return (
        <>
            <Header
                title="View Property"
                crumbs={[
                    { href: "/", text: "Home" },
                    { href: "/properties", text: "Properties" },
                ]}
            >
                <Link href={`/properties/${router.query.id}/edit`}>
                    <Button>Edit Property</Button>
                </Link>
            </Header>
            <PropertyView id={router.query.id} />
        </>
    );
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withLayout(Page);
