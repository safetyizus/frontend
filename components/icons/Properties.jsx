import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/primitives";

const Properties = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <title>detached-property</title>
            <g fill={color}>
                <rect x="7" y="4" width="2" height="2"></rect>
                <path
                    d="M15,8H13V4.618l.553.277a1,1,0,0,0,.894-1.79l-6-3a1,1,0,0,0-.894,0l-6,3a1,1,0,1,0,.894,1.79L3,4.618V8H1A1,1,0,0,0,0,9v6a1,1,0,0,0,1,1H7V12H9v4h6a1,1,0,0,0,1-1V9A1,1,0,0,0,15,8ZM5,13H3V10H5ZM5,8V4a.98.98,0,0,0-.07-.347L8,2.118l3.07,1.535A.98.98,0,0,0,11,4V8Zm8,5H11V10h2Z"
                    fill={color}
                ></path>
            </g>
        </svg>
    );
};

Properties.propTypes = {
    color: PropTypes.string,
};

Properties.defaultProps = {
    color: colors.black,
};

export default Properties;
