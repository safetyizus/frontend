import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/primitives";

const Invoice = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <title>bill</title>
            <g fill={color}>
                <path
                    d="M14,0H2A.945.945,0,0,0,1,1V16l3-2,2,2,2-2,2,2,2-2,3,2V1A.945.945,0,0,0,14,0ZM8,10H4V8H8ZM8,6H4V4H8Zm3,4a1,1,0,1,1,1-1A1,1,0,0,1,11,10Zm0-4a1,1,0,1,1,1-1A1,1,0,0,1,11,6Z"
                    fill={color}
                ></path>
            </g>
        </svg>
    );
};

Invoice.propTypes = {
    color: PropTypes.string,
};

Invoice.defaultProps = {
    color: colors.black,
};

export default Invoice;
