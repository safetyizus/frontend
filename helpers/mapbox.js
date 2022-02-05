export const MAPBOX_API_TOKEN =
    "pk.eyJ1IjoianRhY2NpbmVsbGkiLCJhIjoiY2t6OW5pdzN1MDBvaTJwb3RvdHMybzcxYSJ9.sf-Yuv8UMRq4xMS6u4BXMw";

export const MAPBOX_MAP_STYLE =
    "mapbox://styles/jtaccinelli/ckz9nzz32000p14mgu4cgh1xp";

export const searchAddress = async (address) => {
    const encodedAddress = encodeURIComponent(address);
    const searchQuery = new URL(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json`
    );

    const searchParams = new URLSearchParams({
        access_token: MAPBOX_API_TOKEN,
        country: "AU",
        routing: true,
    });

    searchQuery.search = searchParams;

    const response = await fetch(searchQuery);
    const json = await response.json();

    return json;
};
