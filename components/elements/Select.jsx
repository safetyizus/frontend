import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Arrow from "icons/Arrow";
import { colors, spacers } from "components/styles/primitives";
import { type } from "components/styles/mixins";

const Body = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
        margin-right: ${spacers.base(1)};
    }
`;

const Label = styled.p`
    ${type.em};
`;

const ToggleArrow = styled.div``;

const ToggleText = styled.div`
    ${type.p};
`;

const Toggle = styled.div`
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
        margin-right: ${spacers.base(1)};
    }

    border: 1px solid ${colors.gray["200"]};
    background: ${colors.white};
    border-radius: 4px;
    padding: ${spacers.base(1)} ${spacers.spacing(1)};

    &:hover {
        cursor: pointer;
    }

    ${ToggleArrow} {
        transform: rotate(0deg);
        transition: 0.2s ease transform;

        ${(props) => {
            return (
                props.show &&
                css`
                    transform: rotate(180deg);
                `
            );
        }}
    }
`;

const DropdownItem = styled.div`
    padding: ${spacers.base(1)} ${spacers.spacing(1)};
    background: ${colors.white};
    transition: 0.1s ease background;

    &:hover {
        background: ${colors.gray["100"]};
        cursor: pointer;
    }
`;

const DropdownText = styled.div`
    ${type.p};
    color: ${colors.gray["500"]};

    ${(props) => {
        return (
            props.active &&
            css`
                color: ${colors.black};
            `
        );
    }}
`;

const Dropdown = styled.div`
    position: absolute;
    top: calc(100% + ${spacers.base(1)});

    background: ${colors.white};
    padding: ${spacers.base(1)} 0;
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.05));

    transform: translateY(${spacers.base(1)});
    opacity: 0;
    pointer-events: none;
    transition: 0.2s ease transform, 0.2s ease opacity;

    ${(props) => {
        return (
            props.show &&
            css`
                transform: translateY(0px);
                opacity: 1;
                pointer-events: auto;
            `
        );
    }}
`;

const Select = ({ value, items, onChange, label }) => {
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(
        items.find((item) => {
            return item.value === value;
        })
    );

    useEffect(() => {
        if (selectedItem) {
            onChange(selectedItem.value);
        }
    }, [selectedItem]);

    return (
        <Body>
            <Label>{label}</Label>
            <Toggle show={show} onClick={() => setShow(!show)}>
                <ToggleText>{selectedItem.text}</ToggleText>
                <ToggleArrow>
                    <Arrow />
                </ToggleArrow>
            </Toggle>
            <Dropdown show={show}>
                {items.map((item) => (
                    <DropdownItem
                        onClick={() => {
                            setSelectedItem(item);
                            setShow(false);
                        }}
                    >
                        <DropdownText
                            active={item.value === selectedItem.value}
                        >
                            {item.text}
                        </DropdownText>
                    </DropdownItem>
                ))}
            </Dropdown>
        </Body>
    );
};

Select.propTypes = {
    value: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            value: PropTypes.string,
        })
    ),
    onChange: PropTypes.func,
};

Select.defaultProps = {
    value: undefined,
    items: [],
    onChange: () => {},
};

export default Select;
