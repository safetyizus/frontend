export const colors = {};

colors.black = "#000000";

colors.white = "#FFFFFF";

colors.gray = {
    100: "#F6F5F5",
    200: "#E8E6E5",
    300: "#D2CECC",
    400: "#BBB5B3",
    500: "#A49C99",
    600: "#7B7573",
    700: "#524E4C",
    800: "#292726",
    900: "#111010",
};

colors.primary = "#294CC6";

export const spacers = {};

spacers.half = (unit) => `${unit * 4}px`;
spacers.base = (unit) => `${unit * 8}px`;
spacers.spacing = (unit) => `${unit * 16}px`;
spacers.margin = (unit) => `${unit * 24}px`;
spacers.touch = (unit) => `${unit * 40}px`;

export const breakpoints = {};

breakpoints.xs = spacers.base(2 * 12 + 28);
breakpoints.sm = spacers.base(3 * 12 + 28);
breakpoints.md = spacers.base(5 * 12 + 28);
breakpoints.lg = spacers.base(7 * 12 + 28);
breakpoints.xl = spacers.base(9 * 12 + 28);
breakpoints.xxl = spacers.base(11 * 12 + 28);

export const maxWidths = {};

maxWidths.xs = spacers.base(2 * 12 + 22);
maxWidths.sm = spacers.base(3 * 12 + 22);
maxWidths.md = spacers.base(5 * 12 + 22);
maxWidths.lg = spacers.base(7 * 12 + 22);
maxWidths.xl = spacers.base(9 * 12 + 22);
maxWidths.xxl = spacers.base(11 * 12 + 22);
