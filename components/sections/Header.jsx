import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { layout, type } from "styles/mixins";
import { colors, spacers } from "styles/primitives";

import Breadcrumbs from "elements/Breadcrumbs";
import NavigationToggle from "navigation/components/NavigationToggle";

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${spacers.margin(2)} ${spacers.margin(1)};
    border-bottom: 1px solid ${colors.gray["100"]};
`;

const Wrapper = styled.div`
    ${layout.clamp}
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;

    & > *:not(:last-child) {
        margin-bottom: ${spacers.spacing(1)};
    }
`;

const Actions = styled.div`
    display: flex;
    & > *:not(:last-child) {
        margin-right: ${spacers.spacing(1)};
    }
`;

const Title = styled.h1`
    ${type.h1};
`;

const Header = ({ title, crumbs, children }) => {
    return (
        <Body>
            <Wrapper>
                <Content>
                    <NavigationToggle />
                    {!!crumbs && <Breadcrumbs crumbs={crumbs} />}
                    <Title>{title}</Title>
                </Content>
                <Actions>{children}</Actions>
            </Wrapper>
        </Body>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            href: PropTypes.string,
        })
    ),
    crumbs: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            href: PropTypes.string,
        })
    ),
};

Header.defaultProps = {
    actions: undefined,
    crumbs: undefined,
};

export default Header;
