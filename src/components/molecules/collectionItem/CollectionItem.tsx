import React, { FC, PropsWithChildren } from 'react';
import { StyledDiv } from './CollectionItem.styled';

const CollectionItem: FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <li className="collection-item">
            <StyledDiv className="row" style={{ marginBlock: '0px' }}>
                {children}
            </StyledDiv>
        </li>
    );
};

export default CollectionItem;
