import React from "react";
import NextLink, { LinkProps } from "next/link";

interface Props extends LinkProps {
    className?: string;
    ariaLabel?: string;
}

// Next/link doesn't play nicely with eslint/jsxa11y rather than disable the rule we can create a simple workaround component
// Can be refactored out if/when https://github.com/vercel/next.js/issues/5533 is resolved
const Link: React.FC<Props> = ({ href, className = "", ariaLabel, children }) => (
    <NextLink href={href}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={className} aria-label={ariaLabel}>
            {children}
        </a>
    </NextLink>
);

export default Link;
