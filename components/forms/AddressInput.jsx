import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useField } from "formik";

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
    ${type.p};
    color: darkred;
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
`;

const MapContainer = styled.div`
    display: block;
    width: 100%;
    height: 200px;
    margin-bottom: ${spacers.spacing(1)};
`;

const SearchContainer = styled.div`
    position: relative;
`;

const SpinnerContainer = styled.div`
    position: absolute;
    right: ${spacers.spacing(1)};
    top: 50%;
    transform: translateY(-50%);

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
    const [searchResults, setSearchResults] = useState(null);
    const [selectedResult, setSelectedResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const [_, meta, helpers] = useField(name);
    const { setValue } = helpers;

    const address = useDebounce(searchValue, 1000);

    const handleSearchChange = (event) => {
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
            setValue(selectedResult.place_name);
        }
    }, [selectedResult]);

    console.log(selectedResult);

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
                <Input onChange={handleSearchChange} />
                <SpinnerContainer show={loading}>
                    <Spinner />
                </SpinnerContainer>
            </SearchContainer>
            <Error show={meta.touched && meta.error}>{meta.error}</Error>
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
                    {selectedResult?.place_name}
                </SelectedAddressText>
            </SelectedAddress>
        </Body>
    );
};

AddressInput.propTypes = {
    name: PropTypes.string.isRequired,
};

export default AddressInput;
