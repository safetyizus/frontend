import { type } from "components/styles/mixins";
import { colors, spacers } from "components/styles/primitives";
import React, { Fragment } from "react";
import styled from "styled-components";
import Link from "./Link";

const Body = styled.div`
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
        margin-right: ${spacers.base(1)};
    }
`;

const Crumb = styled.p`
    ${type.a};
    color: ${colors.gray["500"]};
    border-color: ${colors.gray["500"]};
`;

const Divider = styled.p`
    ${type.p};
    color: ${colors.gray["300"]};
`;

const Breadcrumbs = ({ crumbs }) => {
    return (
        <Body>
            {crumbs.map((crumb, index) => (
                <Fragment>
                    <Link href={crumb.href}>
                        <Crumb>{crumb.text}</Crumb>
                    </Link>
                    {index < crumbs.length - 1 && <Divider>/</Divider>}
                </Fragment>
            ))}
        </Body>
    );
};

export default Breadcrumbs;
