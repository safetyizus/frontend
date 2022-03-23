import { useState } from "react";

import withLayout from "hocs/withLayout";
import { getAuthProps } from "helpers/ssr";

import Header from "sections/Header";
import PropertyList from "sections/PropertyList";

import Select from "elements/Select";
import Link from "elements/Link";
import Button from "elements/Button";

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
                        { text: "State", value: "state" },
                    ]}
                />
                <Link href="/properties/create">
                    <Button>Create New</Button>
                </Link>
            </Header>
            <PropertyList sort={sort} />
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
