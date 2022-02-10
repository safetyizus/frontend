import React, { useEffect } from "react";
import styled from "styled-components";
import { useUser } from "@auth0/nextjs-auth0";

import { media, type } from "styles/mixins";
import { colors, spacers } from "styles/primitives";

import Link from "elements/Link";

import NAV_LINKS from "navigation/data/NAV_DATA";

import NavigationLink from "./NavigationLink";
import Account from "./Account";
import { useRouter } from "next/router";
import { nanoid } from "nanoid";
import { useInterface } from "contexts/InterfaceContext";
import { css } from "styled-components";
import Close from "components/icons/Close";

// SECTION STYLES

const Body = styled.div`
    display: flex;
    height: 100%;
    width: 90vw;
    max-width: ${spacers.base(36)};
    flex-direction: column;

    position: fixed;
    left: -100%;
    background: ${colors.gray["100"]};

    transition: 0.5s ease left;

    ${(props) => {
        if (props.show) {
            return css`
                left: 0;
            `;
        }
    }}

    ${media("md")} {
        position: relative;
        left: 0;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${colors.primary};
    padding: ${spacers.margin(1)};
`;

const Links = styled.div`
    padding: ${spacers.base(1)} 0;
    height: 100%;
`;

// HEADER STYLES

const SiteName = styled.h3`
    ${type.h4};
    color: ${colors.white};
`;

const CloseButton = styled.div`
    display: flex;
    height: ${spacers.touch(1)};
    width: ${spacers.touch(1)};
    align-items: center;
    justify-content: center;

    transition: 0.2s ease background;

    &:hover {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.1);
    }

    &:active {
        background: rgba(0, 0, 0, 0.2);
    }

    ${media("md")} {
        display: none;
    }
`;

// FOOTER STYLES`

const Navigation = () => {
    const router = useRouter();

    const { showNav, closeNav } = useInterface();

    useEffect(() => {
        router.events.on("routeChangeComplete", closeNav);
    }, []);

    return (
        <Body show={showNav}>
            <Header>
                <Link href="/">
                    <SiteName>SafetyIzUs</SiteName>
                </Link>
                <CloseButton onClick={closeNav}>
                    <Close color={colors.white} />
                </CloseButton>
            </Header>
            <Links>
                {NAV_LINKS.map((link) => (
                    <NavigationLink
                        key={nanoid()}
                        href={link.url}
                        icon={link.icon}
                        text={link.text}
                        active={router.asPath.includes(link.url)}
                    />
                ))}
            </Links>
            <Account />
        </Body>
    );
};

export default Navigation;
