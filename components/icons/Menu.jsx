import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/primitives";

const Menu = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <title>menu-4</title>
            <g fill={color}>
                <path
                    fill={color}
                    d="M8,14H1c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h7c0.552,0,1,0.448,1,1v0C9,13.552,8.552,14,8,14z"
                />
                <path
                    fill={color}
                    d="M15,4H1C0.448,4,0,3.552,0,3v0c0-0.552,0.448-1,1-1h14c0.552,0,1,0.448,1,1v0C16,3.552,15.552,4,15,4z"
                />
                <path d="M15,9H1C0.448,9,0,8.552,0,8v0c0-0.552,0.448-1,1-1h14c0.552,0,1,0.448,1,1v0 C16,8.552,15.552,9,15,9z" />
            </g>
        </svg>
    );
};

Menu.propTypes = {
    color: PropTypes.string,
};

Menu.defaultProps = {
    color: colors.black,
};

export default Menu;
