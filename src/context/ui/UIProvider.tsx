import React, {
	FC,
	PropsWithChildren,
	ReducerWithoutAction,
	useReducer,
} from 'react';

import { UIContext } from './';
import { uiReducer } from './';

export interface UIState {
	sideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
	sideMenuOpen: false,
};

export const UIProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
	const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

	const openSideMenu = () => {
		dispatch({ type: '[UI] - openSidebar' });
	};

	const closeSideMenu = () => {
		dispatch({ type: '[UI] - closeSidebar' });
	};

	return (
		<UIContext.Provider value={{ ...state, openSideMenu, closeSideMenu }}>
			{children}
		</UIContext.Provider>
	);
};
