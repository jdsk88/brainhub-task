import {
  CREATE_ITEM,
  UPDATE_ITEM,
  DELETE_ONE_ITEM,
  DELETE_ALL_ITEMS,
  SET_ITEMS,
  GET_ITEMS,
} from "store/actions";

const initialState = { items: [] };

const eventsReducer = (state = initialState, action) => {
  console.log(state, action ? action : "NO ACTION YET");
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, items: [...state.items] };
    case CREATE_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case UPDATE_ITEM:
      state.items.find((item) => item._id === action.payload._id);
      return {
        ...state,
        items: state.items,
      };
    case DELETE_ONE_ITEM:
      state.items.splice(
        state.items.find((item) => item._id === action.payload._id),
        1
      );
      return {
        ...state,
        items: state.items,
      };
    case DELETE_ALL_ITEMS:
      state.items = [];
      return {
        ...state,
        items: state.items,
      };
    case SET_ITEMS:
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};

export default eventsReducer;
