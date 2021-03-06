import config from "store/config.js";
import { SET_MENU_STATE, MENU_OPEN, SET_THEME } from "../actions.js";

export const initialState = {
  isOpen: [],
  opened: true,
  theme: config.theme,
};

const configurationReducer = (state = initialState, action) => {
  let id;
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_MENU_STATE:
      return {
        ...state,
        opened: action.payload,
      };
    case MENU_OPEN:
      id = action.id;
      return {
        ...state,
        isOpen: [id],
      };
    default:
      return state;
  }
};

export default configurationReducer;
