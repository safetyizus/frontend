import React from "react";
import styled from "styled-components";

import Link from "elements/Link";
import { colors, spacers } from "styles/primitives";
import { type } from "styles/mixins";

const Body = styled.div`
    display: flex;
    padding: ${spacers.spacing(1)} ${spacers.margin(1)};
    background: ${colors.gray["100"]};

    transition: 0.2s ease background;

    &:hover {
        background: ${colors.gray["200"]};
    }

    &:active {
        background: ${colors.white};
    }
`;

const Text = styled.div`
    ${type.p};
`;

const Icon = styled.div`
    margin-right: ${spacers.spacing(1)};
`;

const NavigationLink = ({ href, text, icon }) => {
    return (
        <Link href={href}>
            <Body>
                <Icon>
                    {React.createElement(icon, {
                        color: colors.primary,
                    })}
                </Icon>
                <Text>{text}</Text>
            </Body>
        </Link>
    );
};

export default NavigationLink;
