import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";

import styled, { css } from "styled-components";
import { type } from "components/styles/mixins";
import { colors, spacers } from "components/styles/primitives";

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Input = styled.input`
    ${type.p};
    padding: ${spacers.spacing(1)};

    transition: 0.25s ease border-color, 0.25s ease background,
        0.1s ease transform;

    border: 1px solid ${colors.gray["100"]};

    &:hover {
        background: ${colors.gray["100"]};
        border-color: ${colors.gray["200"]};
    }

    &:active {
        background: ${colors.gray["200"]};
        border-color: ${colors.gray["300"]};
        transform: scale(0.99);
    }

    &:focus {
        background: ${colors.gray["100"]};
        border-color: ${colors.gray["300"]};
        outline: none;
    }
`;

const Label = styled.h3`
    ${type.p};
    margin-bottom: ${spacers.base(1)};
    color: ${colors.gray["600"]};
`;

const Error = styled.p`
    ${(props) => !props.show && `display: none`};
    ${type.p};
    color: darkred;
    margin-top: ${spacers.base(1)};
`;

const TextInput = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);

    return (
        <Body>
            <Label>{label}</Label>
            <Input {...field} {...props} />
            <Error show={meta.touched && meta.error}>{meta.error}</Error>
        </Body>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
};

export default TextInput;
