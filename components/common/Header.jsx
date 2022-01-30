import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { type } from "styles/mixins";

const Body = styled.div`
    display: flex;
`;

const SiteName = styled.p`
    ${type.h4};
`;

const HeaderButtons = styled.div``;

const Header = () => {
    return (
        <Body>
            <SiteName>SafetyIzUs</SiteName>
            <HeaderButtons>
                <a href="/api/auth/login">Login</a>
                <a href="/api/auth/logout">Logout</a>
            </HeaderButtons>
        </Body>
    );
};

export default Header;
