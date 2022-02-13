import Button from "components/elements/Button";
import Link from "components/elements/Link";
import React from "react";
import styled from "styled-components";

const Body = styled.div``;

const Sidebar = styled.div``;

const Image = styled.div``;

const Header = styled.h1``;

const Blurb = styled.p``;

const Login = () => {
    return (
        <Body>
            <Sidebar>
                <Header></Header>
                <Blurb></Blurb>
                <Link href="/api/auth/login">
                    <Button>Sign in</Button>
                </Link>
                <Link href="/api/auth/create">
                    <Button theme="secondary">Create Account</Button>
                </Link>
            </Sidebar>
            <Image></Image>
        </Body>
    );
};

export default Login;
