import api from "services/api";
import {
  SET_ITEMS,
  CREATE_ITEM,
  UPDATE_ITEM,
  DELETE_ONE_ITEM,
  DELETE_ALL_ITEMS,
  GET_ITEMS,
} from "store/actions";

const EventsServices = {
  setItems: async (dispatch) => {
    const res = await api.get(`/events`);
    return (
      dispatch({ type: SET_ITEMS, payload: res.data }),
      dispatch({ type: GET_ITEMS })
    );
  },
  createItem: async (dispatch, data) => {
    console.log(data);
    const res = await api.post(`/events/create`, data);
    return (
      dispatch({ type: CREATE_ITEM, payload: res.data }),
      dispatch({ type: GET_ITEMS })
    );
  },
  updateItem: async (dispatch, id) => {
    const res = await api.put(`/events/${id}`);
    return (
      dispatch({ type: UPDATE_ITEM, payload: res.data }),
      dispatch({ type: GET_ITEMS })
    );
  },
  deleteOneItem: async (dispatch, id) => {
    const res = await api.delete(`/events/delete/${id}`);
    return (
      dispatch({ type: DELETE_ONE_ITEM, payload: res.data }),
      dispatch({ type: GET_ITEMS })
    );
  },
  deleteAllItems: async (dispatch) => {
    const res = await api.delete(`/events/delete/all`);
    return (
      dispatch({ type: DELETE_ALL_ITEMS, payload: res.data }),
      dispatch({ type: GET_ITEMS })
    );
  },
};

export default EventsServices;
