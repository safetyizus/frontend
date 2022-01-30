import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/primitives";

const Tickets = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <title>todo</title>
            <g fill={color}>
                <path d="M6.3,11.7l-2-2c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0L7,9.6l3.3-3.3c0.4-0.4,1-0.4,1.4,0 s0.4,1,0,1.4l-4,4C7.3,12.1,6.8,12.2,6.3,11.7z"></path>{" "}
                <path
                    fill={color}
                    d="M15,1h-3v2h2v11H2V3h2V1H1C0.4,1,0,1.4,0,2v13c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1V2C16,1.4,15.6,1,15,1z"
                ></path>{" "}
                <rect x="5" width="6" height="4"></rect>
            </g>
        </svg>
    );
};

Tickets.propTypes = {
    color: PropTypes.string,
};

Tickets.defaultProps = {
    color: colors.black,
};

export default Tickets;
