import React, { useState } from "react";
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

const Switch = styled.div`
    border-radius: 100px;
    height: ${spacers.margin(1)};
    width: ${spacers.margin(2)};
    background: ${colors.gray["100"]};
    position: relative;

    transition: 0.2s ease background;

    &:hover {
        background: ${colors.gray["200"]};
        cursor: pointer;
    }

    ${(props) => {
        return (
            props.active &&
            css`
                background: ${colors.primary};

                &:hover {
                    background: ${colors.primary};
                }
            `
        );
    }}

    &:after {
        content: "";
        display: block;
        height: ${spacers.margin(1)};
        width: ${spacers.margin(1)};
        border-radius: 100%;
        background: ${colors.white};
        border: 1px solid ${colors.gray["200"]};

        position: absolute;
        top: 50%;
        transform: translate(0%, -50%);
        left: 0;

        transition: 0.2s ease transform, 0.2s ease left;

        ${(props) => {
            return (
                props.active &&
                css`
                    transform: translate(-100%, -50%);
                    left: 100%;
                `
            );
        }}
    }
`;

const Label = styled.h3`
    ${type.p};
    margin-top: ${spacers.base(1)};
    color: ${colors.gray["600"]};
`;

const Error = styled.p`
    ${(props) => !props.show && `display: none`};
    ${type.p};
    color: darkred;
    margin-top: ${spacers.base(1)};
`;

const LightswitchInput = ({ label, name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const { value, touched, error } = meta;
    const { setValue } = helpers;

    return (
        <Body>
            <input type="hidden" {...props} {...field} />
            <Switch active={value} onClick={() => setValue(!value)} />
            <Label>{label}</Label>
            <Error show={touched && error}>{error}</Error>
        </Body>
    );
};

LightswitchInput.propTypes = {
    name: PropTypes.string.isRequired,
};

export default LightswitchInput;
