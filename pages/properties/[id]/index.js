import { useRouter } from "next/router";
import Link from "next/link";

import withLayout from "hocs/withLayout";
import { getAuthProps } from "helpers/ssr";

import useLocalStorage from "hooks/useLocalStorage";
import useModal from "hooks/useModal";

import Header from "sections/Header";
import PropertyView from "sections/PropertyView";

import Button from "elements/Button";
import DeleteProperty from "modals/DeleteProperty";

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

const getProps = async (context) => {
    return {
        props: {},
    };
};

export const getServerSideProps = getAuthProps(getProps);

export default withLayout(Page);
