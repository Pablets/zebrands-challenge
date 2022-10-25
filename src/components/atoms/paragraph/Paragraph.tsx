import React, { CSSProperties, FC, PropsWithChildren } from 'react';

interface ParagraphProps {
    customStyles?: CSSProperties;
}

const Paragraph: FC<PropsWithChildren<ParagraphProps>> = ({ children, customStyles }) => {
    if (typeof children !== 'string') return null;
    return <p style={customStyles}>{children}</p>;
};

export default Paragraph;
