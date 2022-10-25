import React, { CSSProperties, FC, useState } from 'react';

interface TextInputProps {
    onChangeCallback: (value: string) => void;
    debouncedChangeHandler: (value: string) => void;
    inputCustomStyles?: CSSProperties;
}

const TextInput: FC<TextInputProps> = ({ onChangeCallback, inputCustomStyles, debouncedChangeHandler }) => {
    const [textValue, setTextValue] = useState('');

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onChangeCallback(e.target.value);
        debouncedChangeHandler(e.target.value);
        setTextValue(e.target.value);
    };

    return (
        <input
            type="text"
            onChange={onChangeHandler}
            onBlur={() => setTextValue('')}
            value={textValue}
            style={inputCustomStyles}
            placeholder={'Search 🔍'}
        />
    );
};

export default TextInput;
