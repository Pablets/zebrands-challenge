import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';

const TextLink: FC<PropsWithChildren<{ to?: string; clickCallback?: (...[]: any) => void }>> = ({
    to,
    clickCallback,
    children,
}) => {
    return to ? (
        <Link href={to}>
            <a>{children}</a>
        </Link>
    ) : (
        <a onClick={clickCallback} style={{ textDecoration: 'none' }}>
            {children}
        </a>
    );
};

export default TextLink;
