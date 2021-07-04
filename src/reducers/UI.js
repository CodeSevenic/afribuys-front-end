export const uiConstants = {
  SIDE_MENU_CLOSE: 'SIDE_MENU_CLOSE',
  SIDE_MENU_OPEN: 'SIDE_MENU_OPEN',
};

const initialState = {
  closeSideMenu: false,
};

const uiState = (state = initialState, action) => {
  switch (action.type) {
    case uiConstants.SIDE_MENU_CLOSE:
      return { ...state, closeSideMenu: true };
    case uiConstants.SIDE_MENU_OPEN:
      return { ...state, closeSideMenu: false };

    default:
      return state;
  }
};

export default uiState;
