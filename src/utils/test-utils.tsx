import React, { FC, ReactElement } from 'react';
import { render, RenderOptions, queries } from '@testing-library/react';
import * as customQueries from './custom-queries';

const MockedProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <>{children}</>;
};

//TODO: Revisar si 'queries' & 'wrapper' es correcto
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
    render(ui, { queries: { ...queries, ...customQueries }, ...options });

export * from '@testing-library/react';
export { customRender as render };
