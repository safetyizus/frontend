import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/primitives";

const Logout = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <title>logout</title>
            <g fill={color}>
                <polygon points="11,12.414 15.414,8 11,3.586 9.586,5 11.586,7 5,7 5,9 11.586,9 9.586,11 "></polygon>{" "}
                <path
                    fill={color}
                    d="M12,14H3V2h9V0H2C1.448,0,1,0.448,1,1v14c0,0.552,0.448,1,1,1h10V14z"
                ></path>
            </g>
        </svg>
    );
};

Logout.propTypes = {
    color: PropTypes.string,
};

Logout.defaultProps = {
    color: colors.black,
};

export default Logout;
