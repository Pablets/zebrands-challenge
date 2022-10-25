import styled from 'styled-components';

export const StyledTabContainer = styled.div<{ active: boolean }>`
    display: flex;
    min-width: 200%;
    /* transition: transform ease-in 0.1s; */
    transform: ${({ active }) => (!active ? 'translateX(-50%)' : 'translateX(0%)')};
`;

export const StyledTabs = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
`;

export const StyledCol = styled.div<{}>`
    padding: 0px;
`;
