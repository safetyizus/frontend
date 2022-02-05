import React from "react";

import styled from "styled-components";
import { media } from "components/styles/mixins";
import { spacers } from "components/styles/primitives";

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

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

const FormRow = ({ children }) => {
    return <Body>{children}</Body>;
};

export default FormRow;
