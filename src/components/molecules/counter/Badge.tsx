import React, { CSSProperties, FC, PropsWithChildren, ReactNode } from 'react';
import Paragraph from '../../atoms/paragraph/Paragraph';
import { StyledContainer, StyledTextContainer } from './Badge.styled';

interface BadgeProps {
    icon?: ReactNode;
    textOrientation?: 'left' | 'right';
    children: string;
    textStyles?: CSSProperties;
}

const Badge: FC<PropsWithChildren<BadgeProps>> = ({ icon, textOrientation = 'left', children, textStyles }) => {
    return children || icon ? (
        <StyledContainer textOrientation={textOrientation}>
            {icon && <div style={{ width: '20px', height: '20px' }}>{icon}</div>}
            <StyledTextContainer textOrientation={textOrientation} icon={icon} style={{ ...textStyles }}>
                <Paragraph>{children}</Paragraph>
            </StyledTextContainer>
        </StyledContainer>
    ) : null;
};

export default Badge;
