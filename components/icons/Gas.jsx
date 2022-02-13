import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/primitives";

const Gas = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
        >
            <title>energy</title>
            <g fill={color}>
                <path
                    d="M19.449,12.586S20.939,3.811,14.852,0c0,2.668-1.449,5.488-4.051,7.774S3.309,15.193,3.362,20.681C3.4,24.8,5.489,29.771,10.263,32a7.966,7.966,0,0,1,2.789-5.51,6.491,6.491,0,0,0,2.491-4.37c4.112,1.875,6.2,6.817,6.2,9.763l0,.026A11.77,11.77,0,0,0,28.6,21.7c.431-5.15-2.389-12.149-4.891-14.436A13.59,13.59,0,0,1,19.449,12.586Z"
                    fill={color}
                ></path>
            </g>
        </svg>
    );
};

Gas.propTypes = {
    color: PropTypes.string,
};

Gas.defaultProps = {
    color: colors.black,
};

export default Gas;
