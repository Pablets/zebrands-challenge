import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import Heading from './Heading';

describe('Flex container', () => {
    test(`Should render a string passed as children  `, async () => {
        // ARRANGE
        const el = render(<Heading>Something</Heading>);

        // ACT
        const heading = el.getByText(/Something/i);

        // ASSERT
        expect(heading).toBeInTheDocument();
    });
});
