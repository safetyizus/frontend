import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors, spacers } from "components/styles/primitives";
import { type } from "components/styles/mixins";

const STATES = {
    ACTIVE: "active",
    DISABLED: "disabled",
    LOADING: "loading",
};

const THEMES = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    DANGER: "danger",
    INLINE: "inline",
};

const BaseButton = styled.button`
    ${type.em};
    display: inline-flex;
    padding: ${spacers.base(1)} ${spacers.base(2)};
    border: none;
    border-radius: 2px;

    transition: 0.2s ease background;

    &:hover {
        cursor: pointer;
    }
`;

const PrimaryButton = styled(BaseButton)`
    background: ${colors.primary};
    color: ${colors.white};

    &:hover {
        background: ${colors.gray["900"]};
    }

    &:active {
        background: ${colors.gray["800"]};
    }
`;

const SecondaryButton = styled(BaseButton)`
    background: ${colors.gray["100"]};
    color: ${colors.primary};

    &:hover {
        background: ${colors.gray["200"]};
    }

    &:active {
        background: ${colors.gray["300"]};
    }
`;

const DangerButton = styled(BaseButton)`
    background: none;
    color: darkred;
    border: 1px solid red;

    &:hover {
        color: darkred;
        background: ${colors.gray["100"]};
        border: 1px solid red;
    }

    &:active {
        color: darkred;
        background: ${colors.gray["200"]};
        border: 1px solid red;
    }
`;

const InlineButton = styled(BaseButton)`
    background: none;
    color: ${colors.primary};

    &:hover {
        background: ${colors.gray["100"]};
    }

    &:active {
        background: ${colors.gray["200"]};
    }
`;

const Button = ({ state, theme, ...props }) => {
    switch (theme) {
        case THEMES.SECONDARY:
            return <SecondaryButton state={state} {...props} />;
        case THEMES.INLINE:
            return <InlineButton state={state} {...props} />;
        case THEMES.DANGER:
            return <DangerButton state={state} {...props} />;
        case THEMES.PRIMARY:
        default:
            return <PrimaryButton state={state} {...props} />;
    }
};

Button.propTypes = {
    state: PropTypes.oneOf(Object.values(STATES)),
    theme: PropTypes.oneOf(Object.values(THEMES)),
};

Button.defaultProps = {
    state: STATES.ACTIVE,
    theme: THEMES.PRIMARY,
};

export default Button;
