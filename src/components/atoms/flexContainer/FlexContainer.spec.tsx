import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import FlexContainer from './FlexContainer';

const PlaceholderComponent = () => (
    <div>
        <p>Placeholder</p>
    </div>
);

describe('Flex container', () => {
    test(`Should have display:"flex" and flexDirection:"row" by default`, async () => {
        // ARRANGE
        const el = render(<FlexContainer />);

        // ACT
        const flexContainer = el.getByDataCy('flex-container');

        // ASSERT
        expect(flexContainer).toHaveStyle({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        });
    });

    test(`Should have display:"flex" and flexDirection:"reverse-column" if provided `, async () => {
        // ARRANGE
        const el = render(<FlexContainer direction="reverse-column" />);

        // ACT
        const flexContainer = el.getByDataCy('flex-container');

        // ASSERT
        expect(flexContainer).toHaveStyle({
            display: 'flex',
            flexDirection: 'reverse-column',
            justifyContent: 'center',
            alignItems: 'center',
        });
    });

    test(`Should have display:"flex" and alignItems:'flex-start' style if provided `, async () => {
        // ARRANGE
        const el = render(<FlexContainer alignItems="flex-start" />);

        // ACT
        const flexContainer = el.getByDataCy('flex-container');

        // ASSERT
        expect(flexContainer).toHaveStyle({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
        });
    });

    test(`Should have display:"flex" and justifyContent: 'flex-end', style if provided `, async () => {
        // ARRANGE
        const el = render(<FlexContainer justifyContent="flex-end" />);

        // ACT
        const flexContainer = el.getByDataCy('flex-container');

        // ASSERT
        expect(flexContainer).toHaveStyle({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
        });
    });

    test(`Should have display:"flex" and justifyContent: 'flex-end', style if provided `, async () => {
        // ARRANGE
        const el = render(<FlexContainer justifyContent="flex-end" />);

        // ACT
        const flexContainer = el.getByDataCy('flex-container');

        // ASSERT
        expect(flexContainer).toHaveStyle({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
        });
    });

    test(`Should render a children component if provided `, async () => {
        // ARRANGE
        const el = render(
            <FlexContainer justifyContent="flex-end" height="100%" width="100%">
                <PlaceholderComponent />
            </FlexContainer>
        );

        // ACT
        const placeholder = el.queryByText(/Placeholder/i);

        // ASSERT
        expect(placeholder).toBeInTheDocument();
    });
});
