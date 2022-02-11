import React, { useState } from "react";
import PropTypes from "prop-types";
import { useField } from "formik";

import styled, { css } from "styled-components";
import { type } from "components/styles/mixins";
import { colors, spacers } from "components/styles/primitives";

const Body = styled.div`
    display: flex;
    width: 100%;
`;

const Label = styled.h3`
    ${type.p};
    color: ${colors.gray["600"]};
`;

const Error = styled.p`
    ${(props) => !props.show && `display: none`};
    ${type.p};
    color: darkred;
    margin-top: ${spacers.base(1)};
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: ${spacers.spacing(1)};
`;

const Input = styled.input`
    margin-top: ${spacers.base(1)};
`;

const CheckboxInput = ({ label, name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const { value, error, touched } = meta;
    const { setValue } = helpers;

    return (
        <Body>
            <Input type="checkbox" checked={value} {...props} {...field} />
            <Content>
                <Label>{label}</Label>
                <Error show={touched && error}>{error}</Error>
            </Content>
        </Body>
    );
};

CheckboxInput.propTypes = {
    name: PropTypes.string.isRequired,
};

export default CheckboxInput;
