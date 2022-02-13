import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "components/elements/Button";
import Link from "components/elements/Link";
import { layout, media, type } from "components/styles/mixins";
import { colors, spacers } from "components/styles/primitives";

const Body = styled.div`
    background: ${colors.gray["800"]};
    padding: ${spacers.margin(1)};
`;

const Container = styled.div`
    ${layout.clamp()};
    ${layout.grid()};
    padding: ${spacers.margin(1)} 0;
`;

const Column = styled.div`
    ${layout.column(12)};

    ${media("xs")} {
        ${layout.column(6)};
    }

    ${media("md")} {
        ${layout.column(4)};
    }

    display: flex;
    padding-right: ${spacers.margin(1)};
`;

const ColumnHeading = styled.h3`
    ${type.h4};
    color: ${colors.white};
    margin-bottom: ${spacers.spacing(1)};
`;

const ColumnLink = styled.p`
    ${type.a};
    display: inline-block;
    color: ${colors.white};
    border-color: ${colors.white};
    margin-bottom: ${spacers.base(1)};
`;

const ColumnText = styled.p`
    ${type.p};
    color: ${colors.gray["500"]};
    margin-bottom: ${spacers.base(1)};
`;

const PageFooter = () => {
    return (
        <Body>
            <Container>
                <Column>
                    <ColumnHeading>About Us</ColumnHeading>
                    <ColumnText>
                        Safety Iz Us’ trusted reputation and strong partnerships
                        with Owners Corporations and Real Estate agencies allows
                        us to offer an unparalleled service to all our
                        customers. We offer prompt service from highly skilled
                        tradespeople with our sole focus on keeping tenants safe
                        by adhering to the legislative requirements and
                        compliance.
                    </ColumnText>
                </Column>
                <Column>
                    <ColumnHeading>Find Us</ColumnHeading>
                    <ColumnText>N: SafetyIzUs Pty Ltd</ColumnText>
                    <ColumnText>
                        A: PO Box 664 Bentleigh East VIC 3165
                    </ColumnText>
                    <ColumnText>E: info@safetyizus.com.au</ColumnText>
                    <ColumnText>ABN: 88 636 064 438</ColumnText>
                </Column>
                <Column>
                    <ColumnHeading>Policies</ColumnHeading>
                    <div>
                        <Link href="https://www.safetyizus.com.au/ii.html">
                            <ColumnLink>Important Info</ColumnLink>
                        </Link>
                    </div>
                    <div>
                        <Link href="https://www.safetyizus.com.au/ii.html">
                            <ColumnLink>FAQs</ColumnLink>
                        </Link>
                    </div>
                    <div>
                        <Link href="https://www.safetyizus.com.au/ii.html">
                            <ColumnLink>Terms & Conditions</ColumnLink>
                        </Link>
                    </div>
                    <div>
                        <Link href="https://www.safetyizus.com.au/ii.html">
                            <ColumnLink>Privacy Policy</ColumnLink>
                        </Link>
                    </div>
                </Column>
            </Container>
        </Body>
    );
};

PageFooter.propTypes = {
    header: PropTypes.string,
    subheader: PropTypes.string,
};

PageFooter.defaultProps = {
    header: undefined,
    subheader: undefined,
};

export default PageFooter;
