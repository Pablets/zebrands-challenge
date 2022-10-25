import React, { FC, PropsWithChildren } from 'react';

const Collection: FC<PropsWithChildren<{}>> = ({ children }) => {
	return <ul className="collection">{children}</ul>;
};

export default Collection;
