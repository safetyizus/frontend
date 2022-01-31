import React, { Fragment } from "react";
import styled from "styled-components";
import { useUser } from "@auth0/nextjs-auth0";

import { colors, spacers } from "styles/primitives";
import { type } from "styles/mixins";

import Link from "elements/Link";

const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${spacers.base(1)} 0;
    background: ${colors.gray["900"]};
`;

const Item = styled.div`
    display: flex;
    padding: ${spacers.spacing(1)} ${spacers.margin(1)};
    background: ${colors.gray["900"]};

    transition: 0.2s ease background;

    &:hover {
        background: ${colors.gray["800"]};
    }

    &:active {
        background: ${colors.black};
    }
`;

const Text = styled.p`
    ${type.p};
    color: ${colors.white};
`;

const Account = () => {
    const { user, checkSession } = useUser();
    const isLoggedIn = !!user?.sub;

    return (
        <Body>
            {!isLoggedIn ? (
                <Link href="/api/auth/login">
                    <Item>
                        <Text>Login</Text>
                    </Item>
                </Link>
            ) : (
                <Fragment>
                    <Link href="/account">
                        <Item>
                            <Text>My Account</Text>
                        </Item>
                    </Link>
                    <Link href="/account/edit">
                        <Item>
                            <Text>Account Settings</Text>
                        </Item>
                    </Link>
                    <Link href="/api/auth/logout">
                        <Item>
                            <Text>Log Out</Text>
                        </Item>
                    </Link>
                </Fragment>
            )}
        </Body>
    );
};

export default Account;
