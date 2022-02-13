import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Close from "icons/Close";
import { colors, spacers } from "components/styles/primitives";
import { useRouter } from "next/router";

const Container = styled.div`
    display: block;
    max-width: 600px;
    max-height: 800px;

    position: relative;
    background: rgba(255, 255, 255, 0.5);
    transform: translateY(0px);
    transition: 0.3s ease transform;
`;

const CloseButton = styled.div`
    position: absolute;
    top: -${spacers.margin(1)};
    right: -${spacers.margin(1)};

    &:hover {
        cursor: pointer;
    }
`;

const Body = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    height: 100%;
    width: 100%;

    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;

    opacity: 1;
    transition: 0.3s ease opacity;

    ${(props) => {
        return (
            !props.show &&
            css`
                opacity: 0;
                pointer-events: none;

                ${Container} {
                    transform: translateY(${spacers.spacing(1)});
                }
            `
        );
    }}
`;

const useModal = () => {
    const router = useRouter();
    const [show, setShow] = useState(false);

    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

    useEffect(() => {
        router.events.on("routeChangeStart", closeModal);
    }, []);

    const Modal = ({ children }) => {
        const body = useRef(document.getElementById("__next"));

        return createPortal(
            <Body show={show}>
                <Container>
                    <CloseButton onClick={closeModal}>
                        <Close color={colors.white} />
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

    return [Modal, openModal, closeModal];
};

export default useModal;
