import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/primitives";

const Agent = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <title>preferences</title>
            <g fill={color}>
                <path
                    fill={color}
                    d="M15,3h-5C9.4,3,9,3.4,9,4s0.4,1,1,1h5c0.6,0,1-0.4,1-1S15.6,3,15,3z"
                ></path>{" "}
                <path
                    fill={color}
                    d="M1,5h1v2c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1V1c0-0.6-0.4-1-1-1H3C2.4,0,2,0.4,2,1v2H1C0.4,3,0,3.4,0,4 S0.4,5,1,5z"
                ></path>{" "}
                <path d="M1,13h5c0.6,0,1-0.4,1-1s-0.4-1-1-1H1c-0.6,0-1,0.4-1,1S0.4,13,1,13z"></path>{" "}
                <path d="M15,11h-1V9c0-0.6-0.4-1-1-1h-3C9.4,8,9,8.4,9,9v6c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1v-2h1 c0.6,0,1-0.4,1-1S15.6,11,15,11z"></path>
            </g>
        </svg>
    );
};

Agent.propTypes = {
    color: PropTypes.string,
};

Agent.defaultProps = {
    color: colors.black,
};

export default Agent;
