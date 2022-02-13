import React from "react";
import styled, { css } from "styled-components";

import Link from "elements/Link";
import { colors, spacers } from "styles/primitives";
import { type } from "styles/mixins";

const Text = styled.div`
    ${type.p};
    color: ${colors.gray["200"]};
`;

const Icon = styled.div`
    margin-right: ${spacers.spacing(1)};
`;

const Body = styled.div`
    display: flex;
    padding: ${spacers.spacing(1)};
    background: ${colors.black};
    border-left: 2px solid ${colors.black};

    transition: 0.1s ease background, 0.1s ease border-color;

    &:hover {
        background: ${colors.gray["800"]};
        border-color: ${colors.gray["800"]};
    }

    &:active {
        background: ${colors.gray["700"]};
        border-color: ${colors.gray["700"]};
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
                        color: active ? colors.primary : colors.gray["700"],
                    })}
                </Icon>
                <Text>{text}</Text>
            </Body>
        </Link>
    );
};

export default NavigationLink;
