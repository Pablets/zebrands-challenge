import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import TabButton from './TabButton';
import userEvent from '@testing-library/user-event';

describe('Flex container', () => {
    test(`Should have children with color:white style if selected is === value`, async () => {
        const selectCb = jest.fn((value: string) => {
            return value;
        });
        // ARRANGE
        const tabButton = render(
            <TabButton setSelectedCallback={selectCb} selected="repos" value="repos">
                Text
            </TabButton>
        );

        // ASSERT
        expect(tabButton.getByText(/Text/i)).toHaveStyle({ color: 'white' });
    });

    test(`Should inherit color of text if selected is !== value`, async () => {
        const selectCb = jest.fn((value: string) => {
            return value;
        });
        // ARRANGE
        const tabButton = render(
            <TabButton setSelectedCallback={selectCb} selected="repos" value="users">
                Text
            </TabButton>
        );

        // ASSERT
        expect(tabButton.getByText(/Text/i)).toHaveStyle({ color: 'inherit' });
    });

    test(`Should pass the value prop in the callback if clicked`, async () => {
        const selectCb = jest.fn((value: string) => {
            return value;
        });
        // ARRANGE
        const tabButton = render(
            <TabButton setSelectedCallback={selectCb} selected="repos" value="repos">
                Text
            </TabButton>
        );

        await userEvent.click(tabButton.getByText(/Text/i));
        await screen.queryByText(/Text/i);

        // ASSERT
        expect(selectCb).toHaveBeenCalledWith('repos');
    });
});
