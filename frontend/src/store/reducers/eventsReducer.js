import {
  GET_ITEMS,
  UPDATE_ITEM,
  DELETE_ONE_ITEM,
  DELETE_ALL_ITEMS,
  CREATE_ITEM,
  SET_ITEMS,
} from "../actions.js";

export const initialState = { items: [] };

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { items: action.payload };
    case CREATE_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case GET_ITEMS:
      return { ...state, items: [...state.items] };
    case UPDATE_ITEM:
      return;

    case DELETE_ONE_ITEM:
      state.items.splice(
        state.items.find((item) => item._id === action.payload),
        1
      );
      return {
        ...state,
        items: state.items,
      };
    case DELETE_ALL_ITEMS:
      return (state.items = []);

    default:
      return state;
  }
};

export default eventsReducer;
