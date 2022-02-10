import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import { nanoid } from "nanoid";

import styled, { css } from "styled-components";
import { media, type } from "components/styles/mixins";
import { colors, spacers } from "components/styles/primitives";

import Owner from "components/icons/Owner";
import Agent from "components/icons/Agent";

const Body = styled.div`
    display: flex;
    flex-direction: column;
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;

    & > *:not(:last-child) {
        margin: 0 0 ${spacers.spacing(1)} 0;
    }

    ${media("md")} {
        flex-direction: row;
        & > *:not(:last-child) {
            margin: 0 ${spacers.spacing(1)} 0 0;
        }
    }
`;

const Item = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    padding: ${spacers.spacing(1)};
    transition: 0.25s ease border-color, 0.25s ease background,
        0.1s ease transform;

    border: 1px solid ${colors.gray["100"]};

    &:hover {
        cursor: pointer;
        background: ${colors.gray["100"]};
        border-color: ${colors.gray["200"]};
    }

    &:active {
        border-color: ${colors.gray["300"]};
        transform: scale(0.98);
    }

    ${(props) =>
        props.active &&
        css`
            &,
            &:hover,
            &:active {
                border-color: ${colors.primary};
                background: ${colors.white};
            }
        `}
`;

const ItemText = styled.div`
    display: flex;
    flex-direction: column;
`;

const ItemHeading = styled.h4`
    ${type.h4};
`;

const ItemSubheading = styled.p`
    ${type.p};
    color: ${colors.gray["500"]};
`;

const ItemIcon = styled.div`
    display: flex;
    padding: ${spacers.spacing(1)};
`;

const Error = styled.p`
    ${(props) => !props.show && `display: none`};
    ${type.p};
    color: darkred;
    margin-top: ${spacers.base(1)};
`;

const ITEM_VALUES = [
    {
        icon: Owner,
        heading: "Owner",
        subheading: "For property owners and managers",
        value: "owner",
    },
    {
        icon: Agent,
        heading: "Agent",
        subheading: "For service managers and deliverers",
        value: "agent",
    },
];

const AccountTypeInput = ({ name }) => {
    const [_, meta, helpers] = useField(name);

    const { value } = meta;
    const { setValue } = helpers;

    return (
        <Body>
            <Items>
                {ITEM_VALUES.map((item) => (
                    <Item
                        key={nanoid()}
                        onClick={() => setValue(item.value)}
                        active={item.value === value}
                    >
                        <ItemIcon>{React.createElement(item.icon)}</ItemIcon>
                        <ItemText>
                            <ItemHeading>{item.heading}</ItemHeading>
                            <ItemSubheading>{item.subheading}</ItemSubheading>
                        </ItemText>
                    </Item>
                ))}
            </Items>
            <Error show={meta.touched && meta.error}>{meta.error}</Error>
        </Body>
    );
};

AccountTypeInput.propTypes = {
    name: PropTypes.string.isRequired,
};

export default AccountTypeInput;
