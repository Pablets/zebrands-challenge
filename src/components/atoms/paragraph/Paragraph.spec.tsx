import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import Paragraph from './Paragraph';

describe('Flex container', () => {
    test(`Should render a string correctly `, async () => {
        // ARRANGE
        const paragraph = render(<Paragraph>String</Paragraph>);

        // ASSERT
        expect(paragraph.queryByText(/String/i)).toBeInTheDocument();
    });

    test(`Should return null if children it's not a string `, async () => {
        // ARRANGE
        const paragraph = render(
            <Paragraph>
                <div>
                    <p>something</p>
                </div>
            </Paragraph>
        );

        // ASSERT
        expect(paragraph.queryByText(/String/i)).not.toBeInTheDocument();
    });
});
