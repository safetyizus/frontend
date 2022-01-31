import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { type } from "styles/mixins";
import { colors, spacers } from "styles/primitives";

import Button from "elements/Button";
import Link from "elements/Link";
import Breadcrumbs from "elements/Breadcrumbs";

const Body = styled.div`
    display: flex;
    padding: ${spacers.margin(2)} ${spacers.margin(1)};
    border-bottom: 1px solid ${colors.gray["100"]};
    justify-content: space-between;
    align-items: center;
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

const Header = ({ title, actions, crumbs }) => {
    return (
        <Body>
            <Content>
                {!!crumbs && <Breadcrumbs crumbs={crumbs} />}
                <Title>{title}</Title>
            </Content>
            <Actions>
                {actions &&
                    actions.map((action) => (
                        <Link href={action.href}>
                            <Button theme="primary">{action.text}</Button>
                        </Link>
                    ))}
            </Actions>
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
