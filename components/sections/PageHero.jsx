import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "components/elements/Button";
import Link from "components/elements/Link";
import { layout, type } from "components/styles/mixins";
import { colors, spacers } from "components/styles/primitives";

const Body = styled.div`
    background: ${colors.gray["800"]};
    padding: ${spacers.margin(1)};
`;

const Container = styled.div`
    ${layout.clamp()};
    padding: ${spacers.margin(1)} 0;
`;

const Header = styled.h3`
    ${type.h1};
    color: ${colors.white};
    margin-bottom: ${spacers.base(1)};
    margin-top: ${spacers.margin(4)};
`;

const Subheader = styled.p`
    ${type.h4};
    color: ${colors.gray["600"]};
    margin-bottom: ${spacers.margin(1)};
`;

const PageHero = ({ header, subheader }) => {
    return (
        <Body>
            <Container>
                <Header>{header}</Header>
                <Subheader>{subheader}</Subheader>
                <Link href="/tickets">
                    <Button>Dashboard</Button>
                </Link>
            </Container>
        </Body>
    );
};

PageHero.propTypes = {
    header: PropTypes.string,
    subheader: PropTypes.string,
};

PageHero.defaultProps = {
    header: undefined,
    subheader: undefined,
};

export default PageHero;
