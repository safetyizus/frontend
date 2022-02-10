import React, { useEffect } from "react";
import styled from "styled-components";

import { Navigation } from "navigation";
import { useRouter } from "next/router";
import useLocalStorage from "hooks/useLocalStorage";

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

const Body = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`;

const withLayout = (Component) => {
    const WrappedComponent = (props) => {
        const router = useRouter();
        const [user, _] = useLocalStorage("siu_user");

        useEffect(() => {
            if (!user?.is_complete) {
                router.push("/account/create");
            }
        });

        return (
            <Container>
                <Navigation />
                <Body>
                    <Component {...props} />
                </Body>
            </Container>
        );
    };

    return WrappedComponent;
};

export default withLayout;
