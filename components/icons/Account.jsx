import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/primitives";

const Account = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <title>single-05</title>
            <g fill={color}>
                <path
                    fill={color}
                    d="M8,0C5.794,0,4,1.794,4,4v1c0,2.206,1.794,4,4,4s4-1.794,4-4V4C12,1.794,10.206,0,8,0z"
                ></path>{" "}
                <path d="M12.036,9.426C10.969,10.4,9.555,11,8,11s-2.969-0.6-4.036-1.574C2.203,10,1,11.311,1,13v3 h14v-3C15,11.311,13.797,10,12.036,9.426z"></path>
            </g>
        </svg>
    );
};

Account.propTypes = {
    color: PropTypes.string,
};

Account.defaultProps = {
    color: colors.black,
};

export default Account;
