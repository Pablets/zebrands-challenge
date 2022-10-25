import React, { FC, PropsWithChildren } from 'react';
import FlexContainer from '../flexContainer/FlexContainer';
import Paragraph from '../paragraph/Paragraph';
import { StyledTabButtonContainer } from './TabButton.styled';

interface TabButtonProps {
    setSelectedCallback: (value: 'users' | 'repos') => void;
    selected: 'users' | 'repos';
    value: 'users' | 'repos';
}

const TabButton: FC<PropsWithChildren<TabButtonProps>> = ({ setSelectedCallback, selected, value, children }) => {
    return (
        <li
            onClick={() => setSelectedCallback(value)}
            className={`tab col s3 ${selected === value && 'teal'}`}
            style={{ cursor: 'pointer' }}
        >
            <FlexContainer direction="row" alignItems="center" justifyContent="center">
                <Paragraph customStyles={{ color: selected === value ? 'white' : 'inherit' }}>{children}</Paragraph>
            </FlexContainer>
        </li>
    );
};

export default TabButton;
