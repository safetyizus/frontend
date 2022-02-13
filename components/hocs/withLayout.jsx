import React from "react";
import styled from "styled-components";
import { Navigation } from "navigation";

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
