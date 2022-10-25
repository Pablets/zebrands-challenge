import React, { CSSProperties, FC, PropsWithChildren } from 'react';
import { StyledFlexContainer } from './FlexContainer.styled';
import { Directions } from './FlexContainerTypes';
import { AlignItems, JustifyContent } from './FlexContainerTypes';

export interface FlexContainerProps {
	direction?: Directions;
	alignItems?: AlignItems;
	justifyContent?: JustifyContent;
	height?: string;
	width?: string;
	customStyles?: CSSProperties;
}

const FlexContainer: FC<PropsWithChildren<FlexContainerProps>> = ({
	children,
	direction = 'row',
	alignItems = 'center',
	justifyContent = 'center',
	height = '100%',
	width = '100%',
	customStyles,
}) => {
	return (
		<StyledFlexContainer
			direction={direction}
			alignItems={alignItems}
			justifyContent={justifyContent}
			style={{ height, width, ...customStyles }}
			data-cy="flex-container"
		>
			{children}
		</StyledFlexContainer>
	);
};

export default FlexContainer;
