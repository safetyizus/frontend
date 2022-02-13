import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/primitives";

const Electrical = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
        >
            <title>plug-2</title>
            <g fill={color}>
                <path
                    d="M18.707,17.293a1,1,0,0,0-1.414,0L15,19.586,12.414,17l2.293-2.293a1,1,0,0,0-1.414-1.414L11,15.586,8.875,13.462a1,1,0,0,0-1.414,0L5.294,15.629a7.819,7.819,0,0,0-.657,10.32L1.293,29.293a1,1,0,1,0,1.414,1.414l3.345-3.344a7.83,7.83,0,0,0,10.319-.657l2.168-2.168a1,1,0,0,0,0-1.414L16.414,21l2.293-2.293A1,1,0,0,0,18.707,17.293Z"
                    fill={color}
                ></path>
                <path d="M30.707,1.293a1,1,0,0,0-1.414,0L25.948,4.637a7.839,7.839,0,0,0-10.319.657L13.461,7.462a1,1,0,0,0,0,1.414l9.664,9.662a1,1,0,0,0,1.414,0l2.167-2.167a7.819,7.819,0,0,0,.657-10.32l3.344-3.344A1,1,0,0,0,30.707,1.293Z"></path>
            </g>
        </svg>
    );
};

Electrical.propTypes = {
    color: PropTypes.string,
};

Electrical.defaultProps = {
    color: colors.black,
};

export default Electrical;
