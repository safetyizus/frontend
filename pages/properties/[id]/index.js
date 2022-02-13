import { useState } from "react";

import Header from "sections/Header";
import PropertyView from "sections/PropertyView";

import withLayout from "hocs/withLayout";
import withAccount from "hocs/withAccount";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "components/elements/Button";
import useLocalStorage from "hooks/useLocalStorage";

import useModal from "hooks/useModal";
import DeleteProperty from "components/modals/DeleteProperty";

const Page = () => {
    const router = useRouter();
    const [properties, _] = useLocalStorage("siu_properties", {});
    const [Modal, openModal, closeModal] = useModal();

    const property = properties[router.query.id];

    if (!property) router.back();

    return (
        <>
            <Header
                title={property.address}
                crumbs={[
                    { href: "/", text: "Home" },
                    { href: "/properties", text: "Properties" },
                ]}
            >
                <Button theme="danger" onClick={openModal}>
                    Delete
                </Button>
                <Link href={`/properties/${router.query.id}/edit`}>
                    <Button>Edit</Button>
                </Link>
            </Header>
            <PropertyView id={router.query.id} />
            <Modal>
                <DeleteProperty id={router.query.id} onCancel={closeModal} />
            </Modal>
        </>
    );
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {},
    };
};

export default withAccount(withLayout(Page));
