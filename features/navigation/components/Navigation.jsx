import React from "react";
import styled from "styled-components";
import { useUser } from "@auth0/nextjs-auth0";

import { type } from "styles/mixins";
import { colors, spacers } from "styles/primitives";

import Link from "elements/Link";

import NAV_LINKS from "navigation/data/NAV_DATA";

import NavigationLink from "./NavigationLink";
import Account from "./Account";

// SECTION STYLES

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: ${spacers.base(48)};
    height: 100%;

    background: ${colors.gray["100"]};
`;

const Header = styled.div`
    background: ${colors.primary};
    padding: ${spacers.margin(3)} ${spacers.margin(1)};
`;

const Links = styled.div`
    padding: ${spacers.base(1)} 0;
    height: 100%;
`;

const Footer = styled.div`
    padding: ${spacers.base(1)} 0;
    background: ${colors.gray["900"]};
`;

// HEADER STYLES

const SiteName = styled.h3`
    ${type.h4};
    color: ${colors.white};
`;

// FOOTER STYLES`

const Navigation = () => {
    const { user } = useUser();

    console.log(user);
    return (
        <Body>
            <Header>
                <Link href="/">
                    <SiteName>SafetyIzUs</SiteName>
                </Link>
            </Header>
            <Links>
                {NAV_LINKS.map((link) => (
                    <NavigationLink
                        href={link.url}
                        icon={link.icon}
                        text={link.text}
                    />
                ))}
            </Links>
            <Account />
            <Footer></Footer>
        </Body>
    );
};

export default Navigation;
