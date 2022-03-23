import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

import { layout, type } from "components/styles/mixins";
import { colors, spacers } from "components/styles/primitives";

const Body = styled.div`
    background: ${colors.white};
    padding: ${spacers.margin(1)};
    border-bottom: 1px solid ${colors.gray["100"]};
`;

const Container = styled.div`
    ${layout.clamp()};
    padding: ${spacers.margin(1)} 0;
`;

const Note = styled.p`
    ${type.em};
    background: ${colors.gray["100"]};
    padding: ${spacers.spacing(1)};
    border-radius: 4px;
    margin-bottom: ${spacers.margin(1)};
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;

    & > *:not(:last-child) {
        margin-bottom: ${spacers.base(1)};
    }
`;

const Line = styled.p`
    ${type.p};
`;

const PageContent = ({ note, content }) => {
    return (
        <Body>
            <Container>
                <Note>{note}</Note>
                <Content>
                    {content.map((line) => (
                        <Line key={nanoid()}>{line}</Line>
                    ))}
                </Content>
            </Container>
        </Body>
    );
};

export default PageContent;
