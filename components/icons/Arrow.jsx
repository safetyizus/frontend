import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/primitives";

const Arrow = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
        >
            <title>arrow-down</title>
            <g fill={color}>
                <path
                    d="M5.292,11.706a.99.99,0,0,0,.326.217.986.986,0,0,0,.764,0,.99.99,0,0,0,.326-.217l4-4A1,1,0,1,0,9.293,6.293L7,8.586V1A1,1,0,0,0,5,1V8.586L2.707,6.293A1,1,0,0,0,1.293,7.707Z"
                    fill={color}
                ></path>
            </g>
        </svg>
    );
};

Arrow.propTypes = {
    color: PropTypes.string,
};

Arrow.defaultProps = {
    color: colors.black,
};

export default Arrow;
