import { createContext } from 'react';

export interface ContextProps {
	sideMenuOpen: boolean;
	openSideMenu: () => void;
	closeSideMenu: () => void;
}

export const UIContext = createContext<ContextProps>({
	sideMenuOpen: false,
	openSideMenu() {},
	closeSideMenu() {},
});
