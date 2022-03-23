import React from "react";
import useLocalStorage from "hooks/useLocalStorage";
import styled from "styled-components";
import { spacers, colors } from "components/styles/primitives";
import { layout, type } from "components/styles/mixins";
import useProfile from "hooks/useProfile";
import LoadingState from "./LoadingState";

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
    const { user, profile, loading } = useProfile();

    if (loading) {
        return <LoadingState text="Loading account details..." />;
    }

    return (
        <Body>
            <Section>
                <Row>
                    <Heading>Personal Details</Heading>
                </Row>
                <Row>
                    <Name>Name</Name>
                    <Value>
                        {profile.name} {profile.surname}
                    </Value>
                </Row>
                <Row>
                    <Name>Role</Name>
                    <Value>{profile.role}</Value>
                </Row>
                <Row>
                    <Name>Company</Name>
                    <Value>{profile.company}</Value>
                </Row>
            </Section>
            <Section>
                <Row>
                    <Heading>Contact Details</Heading>
                </Row>
                <Row>
                    <Name>Phone</Name>
                    <Value>{profile.mobile_number}</Value>
                </Row>
            </Section>
            <Section>
                <Row>
                    <Heading>Location Details</Heading>
                </Row>
                <Row>
                    <Name>Address</Name>
                    <Value>{profile.address}</Value>
                </Row>
                <Row>
                    <Name>State</Name>
                    <Value>{profile.state}</Value>
                </Row>
                <Row>
                    <Name>Post Code</Name>
                    <Value>{profile.postal_code}</Value>
                </Row>
            </Section>
        </Body>
    );
};

export default AccountView;
