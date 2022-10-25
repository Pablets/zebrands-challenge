import React, { useCallback, useState } from 'react';
import { debounce } from '../../../utils/debounce';
import TextInput from '../../atoms/textInput/TextInput';
import { StyledSearchBox } from './SearchBox.styled';

const SearchBox = ({ onDebouncedChange }) => {
    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = (value: string): void => {
        setInputValue(value);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedChangeHandler = useCallback(debounce(onDebouncedChange, 1000), []);

    return (
        <StyledSearchBox>
            <TextInput
                debouncedChangeHandler={debouncedChangeHandler}
                onChangeCallback={onChangeHandler}
                value={inputValue}
                inputCustomStyles={{ backgroundColor: 'white', paddingInline: '20px', boxSizing: 'border-box', borderRadius: '25px' }}
            />
        </StyledSearchBox>
    );
};

export default SearchBox;
