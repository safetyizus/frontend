import Link from "elements/Link";
import Button from "elements/Button";

import Header from "sections/Header";
import withLayout from "hocs/withLayout";

const Page = () => {
    return (
        <Header
            title="Properties"
            crumbs={[
                { href: "/", text: "Home" },
                { href: "/properties", text: "Properties" },
            ]}
        >
            <Link href="/properties/create">
                <Button>Create New</Button>
            </Link>
        </Header>
    );
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withLayout(Page);
