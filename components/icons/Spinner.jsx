import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/primitives";
import styled, { keyframes } from "styled-components";

const SpinAnimation = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Path = styled.g`
    transform-origin: 8px 8px;
    animation: ${SpinAnimation} 0.8s infinite steps(8, start);
`;

const Spinner = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <title>dots-anim-2</title>
            <g fill={color}>
                <Path>
                    <circle
                        cx="8"
                        cy="1.5"
                        fill={color}
                        r="1.5"
                        opacity="0.6"
                    ></circle>
                    <circle
                        cx="12.596"
                        cy="3.404"
                        fill={color}
                        r="1.5"
                        opacity="0.8"
                    ></circle>
                    <circle cx="14.5" cy="8" fill={color} r="1.5"></circle>
                    <circle
                        cx="12.596"
                        cy="12.596"
                        fill={color}
                        r="1.5"
                        opacity="0.4"
                    ></circle>
                    <circle
                        cx="8"
                        cy="14.5"
                        fill={color}
                        r="1.5"
                        opacity="0.4"
                    ></circle>
                    <circle
                        cx="3.404"
                        cy="12.596"
                        fill={color}
                        r="1.5"
                        opacity="0.4"
                    ></circle>
                    <circle
                        cx="1.5"
                        cy="8"
                        fill={color}
                        r="1.5"
                        opacity="0.4"
                    ></circle>
                    <circle
                        cx="3.404"
                        cy="3.404"
                        fill={color}
                        r="1.5"
                        opacity="0.4"
                    ></circle>
                </Path>
            </g>
        </svg>
    );
};

Spinner.propTypes = {
    color: PropTypes.string,
};

Spinner.defaultProps = {
    color: colors.black,
};

export default Spinner;
