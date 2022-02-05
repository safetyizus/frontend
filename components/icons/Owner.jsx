import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/primitives";

const Owner = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <title>property</title>
            <g fill={color}>
                <path d="M14.504,5.868L8,2.152L1.496,5.868L0.504,4.132l7-4c0.308-0.176,0.685-0.176,0.992,0l7,4 L14.504,5.868z"></path>{" "}
                <path
                    fill={color}
                    d="M4,13v2h8v-2c0,0-1-2-4-2S4,13,4,13z"
                ></path>{" "}
                <circle fill={color} cx="8" cy="8" r="2"></circle>
            </g>
        </svg>
    );
};

Owner.propTypes = {
    color: PropTypes.string,
};

Owner.defaultProps = {
    color: colors.black,
};

export default Owner;
