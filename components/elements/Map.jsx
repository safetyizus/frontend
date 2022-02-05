import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactMapGL from "react-map-gl";
import styled from "styled-components";
import { spacers } from "components/styles/primitives";
import { MAPBOX_API_TOKEN, MAPBOX_MAP_STYLE } from "helpers/mapbox";

const CONTROL_PROPS = {
    boxZoom: false,
    doubleClickZoom: false,
    dragRotate: false,
    dragPan: false,
    keyboard: false,
    scrollZoom: false,
    touchPitch: false,
    touchZoomRotate: false,
};

const Body = styled.div`
    display: block;
    height: 100%;
    width: 100%;

    border-radius: ${spacers.half(1)};
    overflow: hidden;
`;

const Map = ({ longitude, latitude }) => {
    const [viewState, setViewState] = useState({
        zoom: 13,
        latitude,
        longitude,
    });

    useEffect(() => {
        if (latitude && longitude) {
            setViewState({
                ...viewState,
                latitude,
                longitude,
            });
        }
    }, [latitude, longitude]);

    return (
        <Body>
            <ReactMapGL
                mapStyle={MAPBOX_MAP_STYLE}
                mapboxAccessToken={MAPBOX_API_TOKEN}
                style={{ height: "100%", width: "100%" }}
                onMove={(evt) => setViewState(evt.viewState)}
                {...CONTROL_PROPS}
                {...viewState}
            />
        </Body>
    );
};

Map.propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number,
};

Map.defaultProps = {
    latitude: 41.5868,
    longitude: -93.625,
};

export default Map;
