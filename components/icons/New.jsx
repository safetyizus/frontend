import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/primitives";

const New = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <title>e-add</title>
            <g fill={color}>
                <path
                    fill={color}
                    d="M15,7H9V1c0-0.6-0.4-1-1-1S7,0.4,7,1v6H1C0.4,7,0,7.4,0,8s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1V9h6 c0.6,0,1-0.4,1-1S15.6,7,15,7z"
                ></path>
            </g>
        </svg>
    );
};

New.propTypes = {
    color: PropTypes.string,
};

New.defaultProps = {
    color: colors.black,
};

export default New;
