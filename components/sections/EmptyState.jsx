import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const EmptyState = ({ title, action }) => {};

EmptyState.propTypes = {
    title: PropTypes.string,
    action: PropTypes.shape({
        content: PropTypes.string,
        fn: PropTypes.func,
    }),
};

EmptyState.defaultProps = {
    title: "Nothing was found",
    action: {
        content: "Go Back",
        fn: () => window.history.back(),
    },
};

export default EmptyState;
