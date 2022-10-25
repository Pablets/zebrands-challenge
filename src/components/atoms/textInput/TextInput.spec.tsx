import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import TextInput from './TextInput';
import userEvent from '@testing-library/user-event';

describe('Flex container', () => {
    test(`Should render a Search 🔍 placeholder by default `, async () => {
        // ARRANGE
        const debouncedChangeHandler = jest.fn((value: string) => ({}));
        const onChangeCallback = jest.fn((value: string) => ({}));

        const textInput = render(
            <TextInput
                debouncedChangeHandler={debouncedChangeHandler}
                onChangeCallback={onChangeCallback}
                inputCustomStyles={{ backgroundColor: 'red' }}
            />
        );

        // ASSERT
        expect(textInput.queryByPlaceholderText('Search 🔍')).toBeInTheDocument();
    });

    test(`Should pass values to the debouncedChangeHandler callback on user input `, async () => {
        // ARRANGE
        const debouncedChangeHandler = jest.fn((value: string) => ({}));
        const onChangeCallback = jest.fn((value: string) => ({}));

        const input = 'som';

        const textInput = render(
            <TextInput
                debouncedChangeHandler={debouncedChangeHandler}
                onChangeCallback={onChangeCallback}
                inputCustomStyles={{ backgroundColor: 'red' }}
            />
        );

        // ACT
        await userEvent.click(textInput.getByPlaceholderText('Search 🔍'));
        await userEvent.keyboard(input);

        // ASSERT
        expect(debouncedChangeHandler).toHaveBeenCalledWith('s');
        expect(debouncedChangeHandler).toHaveBeenCalledWith('so');
        expect(debouncedChangeHandler).toHaveBeenCalledWith('som');

        expect(onChangeCallback).toHaveBeenCalledWith('s');
        expect(onChangeCallback).toHaveBeenCalledWith('so');
        expect(onChangeCallback).toHaveBeenCalledWith('som');
    });

    test(`Should reset the value on blur `, async () => {
        // ARRANGE
        const debouncedChangeHandler = jest.fn((value: string) => ({}));
        const onChangeCallback = jest.fn((value: string) => ({}));

        const input = 'som';

        const textInput = render(
            <>
                <TextInput
                    debouncedChangeHandler={debouncedChangeHandler}
                    onChangeCallback={onChangeCallback}
                    inputCustomStyles={{ backgroundColor: 'red' }}
                />
                <div>Another Component</div>
            </>
        );

        // ACT
        await userEvent.click(textInput.getByPlaceholderText('Search 🔍'));
        await userEvent.keyboard(input);

        // ASSERT
        expect(textInput.getByDisplayValue(input)).toBeInTheDocument();

        await userEvent.click(textInput.getByText(/Another Component/i));

        expect(textInput.queryByText(input)).not.toBeInTheDocument();
    });
});
