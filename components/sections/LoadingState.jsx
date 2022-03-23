import React from "react";
import styled from "styled-components";

import { colors, spacers } from "styles/primitives";
import { layout } from "styles/mixins";

import Spinner from "icons/Spinner";

const Container = styled.div`
    padding: ${spacers.margin(1)};
`;

const Body = styled.div`
    ${layout.clamp()};
    background: ${colors.gray["100"]};
    padding: ${spacers.spacing(1)};
    border-radius: 4px;

    display: flex;

    & > *:not(:last-child) {
        margin-right: ${spacers.spacing(1)};
    }
`;

const Message = styled.p`
    color: ${colors.gray["600"]};
`;

const LoadingState = ({ text }) => {
    return (
        <Container>
            <Body>
                <Spinner />
                <Message>{text}</Message>
            </Body>
        </Container>
    );
};

export default LoadingState;
