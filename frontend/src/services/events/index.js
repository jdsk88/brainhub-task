import api from "services/api";
import {
  SET_ITEMS,
  CREATE_ITEM,
  UPDATE_ITEM,
  DELETE_ONE_ITEM,
  DELETE_ALL_ITEMS,
} from "store/actions";

const EventsServices = {
  getItems: async (dispatch) => {
    const res = await api.get(`/events`);
    return dispatch({ type: SET_ITEMS, payload: res.data });
  },
  createItem: async (dispatch, data) => {
    await api.post(`/events/create`, data);
    return dispatch({ type: CREATE_ITEM, payload: data });
  },
  updateItem: async (dispatch, id) => {
    const res = await api.put(`/events/${id}`);
    return dispatch({ type: UPDATE_ITEM, payload: res.data });
  },
  deleteOneItem: async (dispatch, id) => {
    const res = await api.delete(`/events/delete/${id}`);
    return dispatch({ type: DELETE_ONE_ITEM, payload: res.data });
  },
  deleteAllItems: async (dispatch) => {
    const res = await api.delete(`/events/delete/all`);
    return dispatch({ type: DELETE_ALL_ITEMS, payload: res.data });
  },
};

export default EventsServices;
