import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useLocalStorage from "hooks/useLocalStorage";
import Button from "components/elements/Button";
import { spacers, colors } from "components/styles/primitives";
import { type } from "components/styles/mixins";
import { useRouter } from "next/router";

const Body = styled.div`
    display: flex;
    flex-direction: column;
    background: ${colors.white};
`;

const Header = styled.h3`
    ${type.h2};
    padding: ${spacers.margin(1)};
    border-bottom: 1px solid ${colors.gray["100"]};
`;

const Blurb = styled.p`
    ${type.p};
    padding: ${spacers.margin(1)};
`;

const Highlight = styled.span`
    ${type.em};
`;

const Actions = styled.div`
    display: flex;
    padding: ${spacers.margin(1)};
    border-top: 1px solid ${colors.gray["100"]};

    & > *:not(:last-child) {
        margin-right: ${spacers.spacing(1)};
    }
`;

const DeleteProperty = ({ id, onCancel }) => {
    const router = useRouter();
    const [properties, setProperties] = useLocalStorage("siu_properties", {});
    const property = properties[id];

    const handleDelete = () => {
        const copiedProperties = { ...properties };
        delete copiedProperties[id];

        setProperties(copiedProperties);

        router.push("/properties");
    };

    if (!property) return null;

    return (
        <Body>
            <Header>Delete Property</Header>
            <Blurb>
                Are you sure you want to delete
                <Highlight>{property.address}</Highlight>? You won't be able to
                undo this action
            </Blurb>
            <Actions>
                <Button onClick={handleDelete}>Delete</Button>
                <Button onClick={onCancel} theme="inline">
                    Cancel
                </Button>
            </Actions>
        </Body>
    );
};

DeleteProperty.propTypes = {
    id: PropTypes.string,
    onCancel: PropTypes.func,
};

DeleteProperty.defaultProps = {
    id: undefined,
    onCancel: () => {},
};

export default DeleteProperty;
