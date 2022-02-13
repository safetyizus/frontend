import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/primitives";

const SmokeAlarm = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
        >
            <title>sensor</title>
            <g fill={color}>
                <path
                    d="M16,32A16,16,0,0,1,16,0V2A14,14,0,1,0,30,16h2A16.018,16.018,0,0,1,16,32Z"
                    fill={color}
                />
                <circle cx="16" cy="16" r="3" />
                <path
                    d="M16,26V24a8,8,0,1,0-8-8H6A10,10,0,1,1,16,26Z"
                    fill={color}
                />
                <path d="M12.666,25.431a9.96,9.96,0,0,1-6.1-6.1l1.886-.666a8.075,8.075,0,0,0,4.877,4.876Z" />
                <path d="M29.72,13.2A13.954,13.954,0,0,0,18.8,2.28L19.2.319A15.953,15.953,0,0,1,31.68,12.8Z" />
            </g>
        </svg>
    );
};

SmokeAlarm.propTypes = {
    color: PropTypes.string,
};

SmokeAlarm.defaultProps = {
    color: colors.black,
};

export default SmokeAlarm;
