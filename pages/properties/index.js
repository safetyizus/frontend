import Link from "elements/Link";
import Button from "elements/Button";

import Header from "sections/Header";
import PropertyList from "sections/PropertyList";

import withLayout from "hocs/withLayout";
import withAccount from "hocs/withAccount";
import Select from "components/elements/Select";
import { useState } from "react";

const Page = () => {
    const [sort, setSort] = useState("newest");

    return (
        <>
            <Header
                title="Properties"
                crumbs={[
                    { href: "/", text: "Home" },
                    { href: "/properties", text: "Properties" },
                ]}
            >
                <Select
                    label="Sort By"
                    value={sort}
                    onChange={(value) => setSort(value)}
                    items={[
                        { text: "Newest", value: "newest" },
                        { text: "Oldest", value: "oldest" },
                        { text: "Suburb", value: "suburb" },
                    ]}
                />
                <Link href="/properties/create">
                    <Button>Create New</Button>
                </Link>
            </Header>
            <PropertyList />
        </>
    );
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withAccount(withLayout(Page));
