import { Fragment } from "react";
import styled from "styled-components";

import Navigation from "common/Navigation";

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

const Layout = ({ children }) => {
    return (
        <Container>
            <Navigation />
            <Body>{children}</Body>
        </Container>
    );
};

export default Layout;
