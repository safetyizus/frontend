import React, { useRef } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import styled from "styled-components";

import Close from "icons/Close";

const Body = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    display: block;
    height: 100%;
    width: 100%;

    background: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div``;

const CloseButton = styled.div``;

const Modal = ({ children, onClose, show }) => {
    const body = useRef(document.getElementById("__next"));

    return createPortal(
        <Body show={show}>
            <Background onClick={onClose} />
            <Container>
                <CloseButton onClick={onClose}>
                    <Close />
                </CloseButton>
                {children}
            </Container>
        </Body>,
        body.current
    );
};

Modal.propTypes = {
    onClose: PropTypes.func,
    show: PropTypes.bool,
};

Modal.defaultProps = {
    onClose: () => {},
    show: false,
};

export default Modal;
