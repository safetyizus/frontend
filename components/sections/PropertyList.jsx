import Link from "components/elements/Link";
import Select from "components/elements/Select";
import { layout, type } from "components/styles/mixins";
import { colors, spacers } from "components/styles/primitives";
import useLocalStorage from "hooks/useLocalStorage";
import React, { useState } from "react";
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

const HeaderRow = styled.div`
    padding: ${spacers.margin(1)};
`;

const PropertyList = ({ sort }) => {
    const [properties, _] = useLocalStorage("siu_properties", {});

    return (
        <Body>
            {Object.values(properties).map((property) => (
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
