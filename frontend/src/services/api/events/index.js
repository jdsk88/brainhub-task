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
  getItems: async (dispatch) => {
    const res = await api.get(`/events`);
    return dispatch({ type: SET_ITEMS, payload: res.data });
  },
  initialState: async (dispatch) => {
    const res = await api.get("/events/initialState");
    return dispatch({ type: SET_ITEMS, payload: res.data });
    // ,
    // dispatch({ type: GET_ITEMS })
  },
  createItem: async (dispatch, data) => {
    const res = await api.post(`/events/create`, data);
    return dispatch({ type: CREATE_ITEM, payload: res.data });
  },
  updateItem: async (dispatch, data) => {
    console.log(data);
    const res = await api.put(`/events/${data._id}`, data);
    return dispatch({ type: UPDATE_ITEM, payload: res.data });
  },
  deleteOneItem: async (dispatch, _id) => {
    console.log(_id);
    await api.delete(`/events/delete/${_id}`);
    return (
      dispatch({ type: DELETE_ONE_ITEM, payload: _id }),
      dispatch({ type: GET_ITEMS })
    );
  },
  deleteAllItems: async (dispatch) => {
    const res = await api.delete(`/events/delete`);
    return (
      dispatch({ type: DELETE_ALL_ITEMS, payload: res.data }),
      dispatch({ type: GET_ITEMS })
    );
  },
};

export default EventsServices;
