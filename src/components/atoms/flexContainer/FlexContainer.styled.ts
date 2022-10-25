import styled from 'styled-components';
import { AlignItems, Directions } from './FlexContainerTypes';
import { JustifyContent } from './FlexContainerTypes';

export const StyledFlexContainer = styled.div<{
    direction: Directions;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
}>`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    justify-content: ${({ justifyContent }) => justifyContent || 'unset'};
    align-items: ${({ alignItems }) => alignItems || 'unset'};
`;
