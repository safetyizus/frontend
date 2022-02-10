import React from "react";
import styled, { css } from "styled-components";

import { colors, spacers } from "styles/primitives";
import { useInterface } from "contexts/InterfaceContext";

import Menu from "icons/Menu";
import { media } from "components/styles/mixins";

const Body = styled.div`
    display: flex;
    background: ${colors.gray["100"]};
    height: ${spacers.touch(1)};
    width: ${spacers.touch(1)};

    align-items: center;
    justify-content: center;

    transition: 0.2s ease background;

    &:hover {
        background: ${colors.gray["200"]};
    }

    &:active {
        background: ${colors.white};
    }

    ${media("md")} {
        display: none;
    }
`;

const NavigationToggle = () => {
    const { toggleNav } = useInterface();

    return (
        <Body onClick={toggleNav}>
            <Menu />
        </Body>
    );
};

export default NavigationToggle;
