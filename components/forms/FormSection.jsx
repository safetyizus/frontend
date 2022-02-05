import React from "react";

import styled from "styled-components";
import { layout, type } from "components/styles/mixins";
import { colors, spacers } from "components/styles/primitives";

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${spacers.margin(1)};
    border-bottom: 1px solid ${colors.gray["100"]};
`;

const Wrapper = styled.div`
    ${layout.clamp};
    display: flex;
    flex-direction: column;

    & > *:not(:last-child) {
        margin: 0 0 ${spacers.spacing(1)} 0;
    }
`;

const Heading = styled.h4`
    ${type.em};
`;

const FormSection = ({ heading, children }) => {
    return (
        <Body>
            <Wrapper>
                <Heading>{heading}</Heading>
                {children}
            </Wrapper>
        </Body>
    );
};

export default FormSection;
