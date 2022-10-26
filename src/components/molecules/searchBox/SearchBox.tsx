import React, { FC, useCallback, useState } from 'react';
import { debounce } from '../../../utils/debounce';
import TextInput from '../../atoms/textInput/TextInput';
import { StyledSearchBox } from './SearchBox.styled';

interface SearchBoxProps {
	onDebouncedChange: (value: string) => Promise<void>;
}

const SearchBox: FC<SearchBoxProps> = ({ onDebouncedChange }) => {
	const onChangeHandler = (value: string): void => {
		// setInputValue(value);
		// TODO: Add onchange input validation
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedChangeHandler = useCallback(
		debounce(onDebouncedChange, 1000),
		[]
	);

	return (
		<TextInput
			debouncedChangeHandler={debouncedChangeHandler}
			onChangeCallback={onChangeHandler}
			inputCustomStyles={{
				// backgroundColor: 'white',
				paddingInline: '20px',
				boxSizing: 'border-box',
				borderRadius: '25px',
				borderWidth: '.5px',
				fontSize: '20px',
			}}
		/>
	);
};

export default SearchBox;
