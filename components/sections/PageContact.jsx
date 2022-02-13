import { layout, type, media } from "components/styles/mixins";
import { colors, spacers } from "components/styles/primitives";
import React from "react";
import styled from "styled-components";

import ContactForm from "components/sections/ContactForm";

const Body = styled.div`
    background: ${colors.white};
    padding: ${spacers.margin(1)};
    border-bottom: 1px solid ${colors.gray["100"]};
`;

const Container = styled.div`
    ${layout.clamp()};
    padding: ${spacers.margin(1)} 0;
`;

const Form = styled.div`
    border: 1px solid ${colors.gray["100"]};
    border-radius: 4px;
`;

const Heading = styled.h3`
    ${type.h3}
    margin-bottom: ${spacers.margin(1)};
`;

const PageContact = ({ cards }) => {
    return (
        <Body>
            <Container>
                <Heading>
                    Interested? Get in touch with us for more information
                </Heading>
                <Form>
                    <ContactForm />
                </Form>
            </Container>
        </Body>
    );
};

export default PageContact;
