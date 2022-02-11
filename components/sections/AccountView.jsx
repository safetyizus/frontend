import React from "react";
import useLocalStorage from "hooks/useLocalStorage";
import styled from "styled-components";
import { spacers, colors } from "components/styles/primitives";
import { layout, type } from "components/styles/mixins";

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
`;

const Value = styled.p`
    ${type.p};
`;

const AccountView = () => {
    const [user, _] = useLocalStorage("siu_user", {});

    return (
        <Body>
            <Section>
                <Row>
                    <Heading>Personal Details</Heading>
                </Row>
                <Row>
                    <Name>Name</Name>
                    <Value>
                        {user.first_name} {user.last_name}
                    </Value>
                </Row>
                <Row>
                    <Name>Account Type</Name>
                    <Value>{user.type}</Value>
                </Row>
                <Row>
                    <Name>Company</Name>
                    <Value>{user.company}</Value>
                </Row>
            </Section>
            <Section>
                <Row>
                    <Heading>Contact Details</Heading>
                </Row>
                <Row>
                    <Name>Phone</Name>
                    <Value>{user.phone}</Value>
                </Row>
            </Section>
            <Section>
                <Row>
                    <Heading>Location Details</Heading>
                </Row>
                <Row>
                    <Name>Address</Name>
                    <Value>
                        {user.unit} {user.address}
                    </Value>
                </Row>
                <Row>
                    <Name>State</Name>
                    <Value>{user.state}</Value>
                </Row>
                <Row>
                    <Name>Post Code</Name>
                    <Value>{user.postcode}</Value>
                </Row>
            </Section>
        </Body>
    );
};

export default AccountView;
