import { css } from "styled-components";
import { breakpoints, maxWidths, spacers } from "styles/primitives";

export const media = (name) => `@media (min-width: ${breakpoints[name]})`;

export const type = {};

type.base = css`
    font-family: "Public Sans", sans-serif;
    font-weight: 350;
`;

type.heading = css`
    font-family: "Public Sans", sans-serif;
    font-weight: 400;
`;

type.label = css`
    font-family: "Archivo", sans-serif;
    font-weight: 450;
`;

type.title = css`
    font-family: "Public Sans", sans-serif;
    font-weight: 250;
    letter-spacing: 1px;
    font-size: 3rem;
    line-height: 125%;
`;

type.h1 = css`
    ${type.heading};
    font-size: 2rem;
    line-height: 125%;
`;

type.h2 = css`
    ${type.heading};
    font-size: 1.75rem;
    line-height: 125%;
`;

type.h3 = css`
    ${type.heading};
    font-size: 1.5rem;
    line-height: 125%;
`;

type.h4 = css`
    ${type.heading};
    font-size: 1.2rem;
    line-height: 125%;
`;

type.p = css`
    ${type.base};
    font-size: 1rem;
    line-height: 150%;
`;

type.lead = css`
    ${type.base};
    font-size: 1.2rem;
    line-height: 150%;
`;

type.label = css`
    ${type.label};
    font-size: 1rem;
    line-height: 125%;
`;

type.em = css`
    ${type.base};
    font-weight: 450;
    font-size: 1rem;
    line-height: 150%;
`;

type.a = css`
    ${type.base};
    font-size: 1rem;
    line-height: 150%;

    border-bottom: 1px solid black;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    transition: 0.1s ease opacity;
`;

export const layout = {};

layout.section = () => css`
    display: block;
    height: auto;
    width: 100%;
`;

layout.container = () => css`
    display: block;
    height: 100%;
    width: 100%;
    margin: 0 auto;

    ${Object.keys(breakpoints).map((key) => {
        return css`
            ${media(key)} {
                max-width: ${maxWidths[key]};
            }
        `;
    })}
`;

layout.clamp = () => css`
    width: 100%;
    max-width: ${spacers.base(112)};
    margin: 0 auto;
`;

const colWidth = `calc((100% - ${spacers.spacing(11)}) / 12)`;

layout.grid = (wrap = false) => css`
    display: grid;
    height: 100%;
    width: 100%;

    grid-template-columns: repeat(12, [col-start] ${colWidth});
    grid-gap: ${spacers.spacing(1)};

    ${wrap &&
    css`
        grid-auto-flow: column;
        grid-auto-columns: ${colWidth};
    `};
`;

layout.column = (span, offset) => css`
    display: block;
    height: auto;
    width: 100%;

    grid-column-end: span ${span};
    ${offset && offset > 0 && `grid-column-start: col-start ${offset + 1}`};
`;
