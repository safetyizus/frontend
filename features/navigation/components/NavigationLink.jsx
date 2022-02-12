import React from "react";
import styled, { css } from "styled-components";

import Link from "elements/Link";
import { colors, spacers } from "styles/primitives";
import { type } from "styles/mixins";

const Text = styled.div`
    ${type.p};
`;

const Icon = styled.div`
    margin-right: ${spacers.spacing(1)};
`;

const Body = styled.div`
    display: flex;
    padding: ${spacers.spacing(1)};
    background: ${colors.white};
    border-left: 2px solid ${colors.gray["100"]};

    transition: 0.2s ease background, 0.1s ease border-color;

    &:hover {
        background: ${colors.gray["200"]};
        border-color: ${colors.gray["200"]};
    }

    &:active {
        background: ${colors.white};
        border-color: ${colors.white};
    }

    ${(props) =>
        props.active &&
        css`
            border-color: ${colors.primary};
        `}
`;

const NavigationLink = ({ href, text, icon, active }) => {
    return (
        <Link href={href}>
            <Body active={active}>
                <Icon>
                    {React.createElement(icon, {
                        color: active ? colors.primary : colors.gray["500"],
                    })}
                </Icon>
                <Text>{text}</Text>
            </Body>
        </Link>
    );
};

export default NavigationLink;
