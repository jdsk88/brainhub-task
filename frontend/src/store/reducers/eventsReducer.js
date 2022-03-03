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
      state.items.forEach((item, index) => {
        if (item._id === action.payload._id) {
          state.items[index] = {
            _id: item._id,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            email: action.payload.email,
            eventDate: action.payload.eventDate,
          };
        }
      });
      return { ...state, items: [...state.items] };
    case DELETE_ONE_ITEM:
      state.items.splice(
        state.items.findIndex((item) => item._id === action.payload),
        1
      );
      return {
        ...state,
        items: state.items,
      };
    case DELETE_ALL_ITEMS:
      state.items = [];
      return state;

    default:
      return state;
  }
};

export default eventsReducer;
