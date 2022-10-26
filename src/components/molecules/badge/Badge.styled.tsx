import styled from 'styled-components';

export const StyledContainer = styled.div<{ textOrientation?: 'left' | 'right' }>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a2756;
    height: 25px;
    padding: 10px;
    border-radius: 30px;
    margin: 5px;
    ${({ textOrientation }) =>
        textOrientation && textOrientation === 'right' ? `flex-direction: row` : `flex-direction: row-reverse`}
`;

export const StyledTextContainer = styled.div<{ textOrientation?: 'left' | 'right'; icon: any }>`
    ${({ textOrientation }) =>
        textOrientation && textOrientation === 'right' ? `margin-left: 5px` : `margin-right: 5px`}
    ${({ icon }) => !icon && `margin: 0px`}
`;
