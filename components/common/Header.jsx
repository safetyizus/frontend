import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { type } from "styles/mixins";
import { colors, spacers } from "components/styles/primitives";
import Button from "components/elements/Button";
import Link from "components/elements/Link";

const Body = styled.div`
    display: flex;
    padding: ${spacers.margin(2)} ${spacers.margin(1)};
    border-bottom: 1px solid ${colors.gray["100"]};
    justify-content: space-between;
`;

const Title = styled.h1`
    ${type.h1};
`;

const Header = ({ title, actions }) => {
    return (
        <Body>
            <Title>{title}</Title>
            {actions &&
                actions.map((action) => (
                    <Link href={action.href}>
                        <Button theme="primary">{action.text}</Button>
                    </Link>
                ))}
        </Body>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            href: PropTypes.string,
        })
    ),
};

Header.defaultProps = {
    action: undefined,
};

export default Header;
