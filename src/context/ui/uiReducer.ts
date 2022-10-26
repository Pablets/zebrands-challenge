import { UIState } from './';

type UIActionType =
	| { type: '[UI] - openSidebar' }
	| { type: '[UI] - closeSidebar' };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
	switch (action.type) {
		case '[UI] - openSidebar':
			return {
				...state,
				sideMenuOpen: true,
			};
		case '[UI] - closeSidebar':
			return {
				...state,
				sideMenuOpen: false,
			};

		default:
			return state;
	}
};
