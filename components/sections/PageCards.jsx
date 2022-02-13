import { layout, type, media } from "components/styles/mixins";
import { colors, spacers } from "components/styles/primitives";
import React from "react";
import styled from "styled-components";

const Body = styled.div`
    background: ${colors.white};
    padding: ${spacers.margin(1)};
    border-bottom: 1px solid ${colors.gray["100"]};
`;

const Container = styled.div`
    ${layout.clamp()};
    ${layout.grid()}
`;

const Column = styled.div`
    ${layout.column(12)}

    ${media("xs")} {
        ${layout.column(6)}
    }

    ${media("md")} {
        ${layout.column(3)}
    }
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
`;

const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    background: ${(props) => props.bg};
    padding: ${spacers.spacing(1)};
`;

const CardHeading = styled.h3`
    ${type.h4};
    color: ${colors.white};
    margin-top: ${spacers.base(1)};
`;

const CardBody = styled.div`
    height: 100%;
    padding: ${spacers.spacing(1)};
    border-left: 1px solid ${colors.gray["100"]};
    border-right: 1px solid ${colors.gray["100"]};
`;

const CardFooter = styled.div`
    padding: ${spacers.spacing(1)};
    background: ${colors.gray["100"]};
    color: ${colors.gray["500"]};
`;

const PageCards = ({ cards }) => {
    return (
        <Body>
            <Container>
                {cards.map((card) => (
                    <Column>
                        <Card>
                            <CardHeader bg={card.color}>
                                {React.createElement(card.icon, {
                                    color: colors.white,
                                })}
                                <CardHeading>{card?.title}</CardHeading>
                            </CardHeader>
                            <CardBody>{card?.blurb}</CardBody>
                            <CardFooter>{card?.period}</CardFooter>
                        </Card>
                    </Column>
                ))}
            </Container>
        </Body>
    );
};

export default PageCards;
