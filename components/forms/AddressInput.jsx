import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useField, useFormikContext } from "formik";

import styled, { css } from "styled-components";
import { type } from "components/styles/mixins";
import { colors, spacers } from "components/styles/primitives";
import Map from "components/elements/Map";
import useDebounce from "hooks/useDebounce";
import { searchAddress } from "helpers/mapbox";
import { nanoid } from "nanoid";
import Spinner from "components/icons/Spinner";

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
`;

const UnitGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: ${spacers.base(12)};
    margin-right: ${spacers.spacing(1)};
`;

const InputLabel = styled.p`
    ${type.p};
    color: ${colors.gray["500"]};
    margin-bottom: ${spacers.base(1)};
`;

const Input = styled.input`
    ${type.p};
    padding: ${spacers.spacing(1)};
    width: 100%;

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

    &[name="address"] {
        padding-right: ${spacers.margin(2)};
    }
`;

const MapContainer = styled.div`
    display: block;
    width: 100%;
    height: 200px;
    margin-bottom: ${spacers.spacing(1)};
`;

const SearchContainer = styled.div`
    position: relative;
    display: flex;
`;

const SpinnerContainer = styled.div`
    position: absolute;
    right: ${spacers.spacing(1)};
    bottom: ${spacers.spacing(1)};

    ${(props) =>
        !props.show &&
        css`
            display: none;
        `}
`;

const Dropdown = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: ${spacers.spacing(1)};
    padding: ${spacers.base(1)} 0;

    border: 1px solid ${colors.gray["100"]};
    border-radius: 4px;
    background: white;

    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.05));

    & > *:not(:last-child) {
        border-bottom: 1px solid ${colors.gray["100"]};
    }

    ${(props) =>
        !props.show &&
        css`
            display: none;
        `}
`;

const DropdownItem = styled.div`
    display: block;
    padding: ${spacers.spacing(1)};

    &:hover {
        background: ${colors.gray["100"]};
        cursor: pointer;
    }
`;

const DropdownText = styled.div`
    ${type.p};
`;

const SelectedAddress = styled.div`
    display: block;
    padding: ${spacers.spacing(1)};
    background: ${colors.gray["100"]};
    border-radius: ${spacers.half(1)};
    margin-top: ${spacers.spacing(1)};

    ${(props) =>
        !props.show &&
        css`
            display: none;
        `}
`;

const SelectedAddressHeading = styled.p`
    ${type.p};
    color: ${colors.gray["500"]};
`;

const SelectedAddressText = styled.p`
    ${type.p};
`;

const AddressInput = ({ label, name }) => {
    const { values, setValues } = useFormikContext();
    const [_, meta, __] = useField(name);

    const [searchResults, setSearchResults] = useState(null);
    const [selectedResult, setSelectedResult] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [loading, setLoading] = useState(false);

    const address = useDebounce(searchValue, 1000);

    const handleValueChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleUserInput = (event) => {
        setSearchValue(event.target.value);
        setLoading(true);
    };

    useEffect(() => {
        if (address) {
            searchAddress(address).then((result) => {
                setSearchResults(result.features);
                setLoading(false);
            });
        }
    }, [address]);

    useEffect(() => {
        if (selectedResult) {
            const { context } = selectedResult;

            const { text: postal_code } = context.find((item) => {
                return item.id.includes("postcode");
            });

            const { text: state } = context.find((item) => {
                return item.id.includes("region");
            });

            setValues({
                ...values,
                address: selectedResult.place_name,
                postal_code,
                state,
            });
        }
    }, [selectedResult]);

    return (
        <Body>
            <MapContainer>
                <Map
                    longitude={selectedResult?.center[0]}
                    latitude={selectedResult?.center[1]}
                />
            </MapContainer>
            <Label>{label}</Label>
            <SearchContainer>
                <UnitGroup>
                    <InputLabel>Unit</InputLabel>
                    <Input
                        name="unit"
                        value={values?.unit ?? ""}
                        onChange={handleValueChange}
                    />
                </UnitGroup>
                <InputGroup>
                    <InputLabel>Address</InputLabel>
                    <Input
                        name="address"
                        value={values?.address ?? ""}
                        onChange={handleValueChange}
                        onKeyPress={handleUserInput}
                    />
                    <SpinnerContainer show={loading}>
                        <Spinner />
                    </SpinnerContainer>
                </InputGroup>
            </SearchContainer>
            <Dropdown show={searchResults}>
                {searchResults?.map((result) => (
                    <DropdownItem
                        key={nanoid()}
                        onClick={() => {
                            setSelectedResult(result);
                            setSearchResults(null);
                        }}
                    >
                        <DropdownText>{result.place_name}</DropdownText>
                    </DropdownItem>
                ))}
            </Dropdown>
            <SelectedAddress show={selectedResult}>
                <SelectedAddressHeading>
                    Selected Address
                </SelectedAddressHeading>
                <SelectedAddressText>
                    {values?.unit} {selectedResult?.place_name}
                </SelectedAddressText>
            </SelectedAddress>
            <Error show={meta.touched && meta.error}>{meta.error}</Error>
        </Body>
    );
};

AddressInput.propTypes = {
    name: PropTypes.string.isRequired,
};

export default AddressInput;
