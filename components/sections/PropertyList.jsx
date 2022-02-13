import Link from "components/elements/Link";
import { layout, type } from "components/styles/mixins";
import { colors, spacers } from "components/styles/primitives";
import useLocalStorage from "hooks/useLocalStorage";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Body = styled.div`
    display: flex;
    flex-direction: column;
`;

const RowContent = styled.div`
    ${layout.clamp()};
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Address = styled.p`
    ${type.p};
`;

const Cta = styled.p`
    ${type.a};

    color: ${colors.gray["300"]};
    border-color: ${colors.gray["300"]};

    transition: 0.2s ease color, 0.2s ease border-color;
`;

const Row = styled.div`
    padding: ${spacers.margin(1)};
    border-bottom: 1px solid ${colors.gray["100"]};

    background: ${colors.white};
    transition: 0.2s ease background;

    &:hover {
        background: ${colors.gray["100"]};

        ${Cta} {
            color: ${colors.primary};
            border-color: ${colors.primary};
        }
    }
`;

const PropertyList = ({ sort }) => {
    const [properties, _] = useLocalStorage("siu_properties", {});
    const [sortedProperties, setSortedProperties] = useState(
        Object.values(properties)
    );

    useEffect(() => {
        switch (sort) {
            case "oldest":
                setSortedProperties(() => {
                    return Object.values(properties).sort((a, b) => {
                        return a.created_at - b.created_at;
                    });
                });
                break;
            case "suburb":
                setSortedProperties(() => {
                    return Object.values(properties).sort((a, b) => {
                        if (a.suburb < b.suburb) return -1;
                        if (a.suburb > b.suburb) return 1;
                        return 0;
                    });
                });
                break;
            case "state":
                setSortedProperties(() => {
                    return Object.values(properties).sort((a, b) => {
                        if (a.state < b.state) return -1;
                        if (a.state > b.state) return 1;
                        return 0;
                    });
                });
                break;
            case "newest":
            default:
                setSortedProperties(() => {
                    return Object.values(properties).sort((a, b) => {
                        return b.created_at - a.created_at;
                    });
                });
        }
    }, [sort, properties]);

    return (
        <Body>
            {sortedProperties.map((property) => (
                <Link href={`/properties/${property.id}`}>
                    <Row>
                        <RowContent>
                            <Address>{property.address}</Address>
                            <Cta>View</Cta>
                        </RowContent>
                    </Row>
                </Link>
            ))}
        </Body>
    );
};

export default PropertyList;
