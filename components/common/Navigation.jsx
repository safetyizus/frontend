import React from "react";
import styled from "styled-components";

import { type } from "styles/mixins";
import { colors, spacers } from "styles/primitives";

import Invoice from "icons/Invoice";
import Properties from "icons/Properties";
import Tickets from "icons/Tickets";

import Link from "elements/Link";

const NAV_LINKS = [
    {
        text: "Invoices",
        url: "/invoices",
        icon: Invoice,
    },
    {
        text: "Properties",
        url: "/properties",
        icon: Properties,
    },
    {
        text: "Tickets",
        url: "/tickets",
        icon: Tickets,
    },
];

// SECTION STYLES

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: ${spacers.base(48)};
    height: 100%;

    background: ${colors.white};
    border-right: 1px solid ${colors.gray["100"]};
`;

const Header = styled.div`
    background: ${colors.gray["100"]};
    padding: ${spacers.margin(3)} ${spacers.margin(1)};
`;

const Links = styled.div`
    padding: ${spacers.base(1)} 0;
    height: 100%;
`;

const Account = styled.div``;

const Footer = styled.div``;

// HEADER STYLES

const SiteName = styled.h3`
    ${type.h4};
`;

// NAVIGATION LINK STYLES

const LinkBody = styled.div`
    display: flex;
    padding: ${spacers.spacing(1)} ${spacers.margin(1)};
    background: ${colors.white};

    transition: 0.3s ease background;

    &:hover {
        background: ${colors.gray["100"]};
    }

    &:active {
        background: ${colors.gray["200"]};
    }
`;

const LinkText = styled.div`
    ${type.p};
`;

const LinkIcon = styled.div`
    margin-right: ${spacers.spacing(1)};
`;

// ACCOUNT STYLES

// FOOTER STYLES

const Navigation = () => {
    return (
        <Body>
            <Header>
                <Link href="/">
                    <SiteName>SafetyIzUs</SiteName>
                </Link>
            </Header>
            <Links>
                {NAV_LINKS.map((link) => {
                    return (
                        <Link href={link.url}>
                            <LinkBody>
                                <LinkIcon>
                                    {React.createElement(link.icon, {
                                        color: colors.primary,
                                    })}
                                </LinkIcon>
                                <LinkText>{link.text}</LinkText>
                            </LinkBody>
                        </Link>
                    );
                })}
            </Links>
            <Account></Account>
            <Footer></Footer>
        </Body>
    );
};

export default Navigation;
