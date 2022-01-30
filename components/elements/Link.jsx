import React from "react";
import NextLink from "next/link";

const Link = ({ href, children, ...props }) => {
    const relativeLinkRegex = /\/\S*/;
    const isRelativeLink = relativeLinkRegex.test(href);

    if (!isRelativeLink) {
        return (
            <a href={href} {...props}>
                {children}
            </a>
        );
    } else {
        return (
            <NextLink href={href} {...props} passHref>
                <a>{children}</a>
            </NextLink>
        );
    }
};

export default Link;
