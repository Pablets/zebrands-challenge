import React, { FC, PropsWithChildren } from 'react';

export interface HeadingProps {
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: string | string[];
}

const Heading: FC<PropsWithChildren<HeadingProps>> = ({ size, children }) => {
    const componentMap = {
        h1: <h1 style={{ margin: '0px' }} data-cy='h1'>{children}</h1>,
        h2: <h2 style={{ margin: '0px' }} data-cy='h2'>{children}</h2>,
        h3: <h3 style={{ margin: '0px' }} data-cy='h3'>{children}</h3>,
        h4: <h4 style={{ margin: '0px' }} data-cy='h4'>{children}</h4>,
        h5: <h5 style={{ margin: '0px' }} data-cy='h5'>{children}</h5>,
        h6: <h6 style={{ margin: '0px' }} data-cy='h6'>{children}</h6>,
    };

    return componentMap[size || 'h1'];
};

export default Heading;
