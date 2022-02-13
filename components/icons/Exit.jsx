import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/primitives";

const Exit = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
        >
            <title>leave</title>
            <g fill={color}>
                <path
                    d="M11.5,6.1,1.5.1A1.107,1.107,0,0,0,.1.5.749.749,0,0,0,0,1V25a1.05,1.05,0,0,0,.5.9l10,6a1.076,1.076,0,0,0,1.4-.3A1.268,1.268,0,0,0,12,31V7A1.05,1.05,0,0,0,11.5,6.1Z"
                    fill={color}
                ></path>
                <path
                    d="M18,0H5.2l7.4,4.4A3.263,3.263,0,0,1,14,7V26h4a.945.945,0,0,0,1-1V1A.945.945,0,0,0,18,0Z"
                    fill={color}
                ></path>
                <path d="M31.838,12.632l-6-5.5A.5.5,0,0,0,25,7.5V11H21v4h4v3.5a.5.5,0,0,0,.838.368l6-5.5a.5.5,0,0,0,0-.736Z"></path>
            </g>
        </svg>
    );
};

Exit.propTypes = {
    color: PropTypes.string,
};

Exit.defaultProps = {
    color: colors.black,
};

export default Exit;
