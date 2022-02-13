import React from "react";
import useLocalStorage from "hooks/useLocalStorage";
import styled from "styled-components";
import { spacers, colors } from "components/styles/primitives";
import { layout, type } from "components/styles/mixins";
import { useRouter } from "next/router";

const Body = styled.div`
    display: flex;
    flex-direction: column;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${spacers.margin(1)};
    border-bottom: 1px solid ${colors.gray["100"]};
`;

const Heading = styled.h3`
    ${type.em};
    color: ${colors.gray["500"]};
`;

const Row = styled.div`
    ${layout.clamp()};
    display: flex;
    padding: ${spacers.base(1)} 0;
`;

const Name = styled.p`
    ${type.em};
    display: block;
    width: ${spacers.base(16)};
    margin-right: ${spacers.margin(1)};
`;

const Value = styled.p`
    ${type.p};
`;

const PropertyView = ({ id }) => {
    const router = useRouter();

    const [properties, _] = useLocalStorage("siu_properties", {});
    const property = properties[id];

    if (!property) router.push("/properties");

    return (
        <Body>
            <Section>
                <Row>
                    <Heading>Address Details</Heading>
                </Row>
                <Row>
                    <Name>Address</Name>
                    <Value>
                        {property.unit} {property.address}
                    </Value>
                </Row>
                <Row>
                    <Name>Suburb</Name>
                    <Value>{property.suburb}</Value>
                </Row>
                <Row>
                    <Name>State</Name>
                    <Value>{property.state}</Value>
                </Row>
                <Row>
                    <Name>Post Code</Name>
                    <Value>{property.postcode}</Value>
                </Row>
            </Section>
            <Section>
                <Row>
                    <Heading>Tenant Details</Heading>
                </Row>

                <Row>
                    <Name>Name</Name>
                    <Value>
                        {property.tenant_first_name} {property.tenant_last_name}
                    </Value>
                </Row>
                <Row>
                    <Name>Phone</Name>
                    <Value>{property.phone}</Value>
                </Row>
            </Section>
            <Section>
                <Row>
                    <Heading>Property Details</Heading>
                </Row>
                <Row>
                    <Name>Does this property have smoke detectors?</Name>
                    <Value>{property.has_smoke_detectors ? "Yes" : "No"}</Value>
                </Row>
                <Row>
                    <Name>Is this property connected to electricity?</Name>
                    <Value>{property.has_electrical ? "Yes" : "No"}</Value>
                </Row>
                <Row>
                    <Name>Is this property connected to gas?</Name>
                    <Value>{property.has_gas ? "Yes" : "No"}</Value>
                </Row>
                <Row>
                    <Name>Is your gas seperately metered?</Name>
                    <Value>
                        {property.has_seperately_metered_gas ? "Yes" : "No"}
                    </Value>
                </Row>
            </Section>
            <Section>
                <Row>
                    <Name>Created On</Name>
                    <Value>{new Date(property.created_at).toString()}</Value>
                </Row>
                <Row>
                    <Name>Updated On</Name>
                    <Value>{new Date(property.updated_at).toString()}</Value>
                </Row>
            </Section>
        </Body>
    );
};

export default PropertyView;
