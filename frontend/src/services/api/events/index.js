import api from "services/api";
import {
  SET_ITEMS,
  CREATE_ITEM,
  UPDATE_ITEM,
  DELETE_ONE_ITEM,
  DELETE_ALL_ITEMS,
  GET_ITEMS,
} from "store/actions";

const errorType = (error) => error.toJSON().message === "Network Error";

const EventsServices = {
  getItems: async (dispatch) => {
    try {
      const res = await api.get(`/events`);
      return (
        dispatch({ type: SET_ITEMS, payload: res.data }),
        alert("Successfuly connectet and get data from api server")
      );
    } catch (error) {
      if (errorType(error)) {
        alert("No connection with api server");
      }
    }
  },
  initialState: async (dispatch) => {
    try {
      const res = await api.get("/events/initialState");
      alert("Successfuly connectet and get data from api server");
      return dispatch({ type: SET_ITEMS, payload: res.data });
    } catch (error) {
      if (errorType(error)) {
        alert("No connection with api server");
      }
    }
  },
  createItem: async (dispatch, data) => {
    try {
      const res = await api.post(`/events/create`, data);

      return (
        dispatch({ type: CREATE_ITEM, payload: res.data }),
        alert("Successfuly connectet and post data to api server")
      );
    } catch (error) {
      if (errorType(error)) {
        alert("No connection with api server");
      }
    }
  },
  updateItem: async (dispatch, data) => {
    try {
      await api.put(`/events/${data._id}`, data);
      return (
        dispatch({ type: UPDATE_ITEM, payload: data }),
        alert("Successfuly connectet and put data to api server")
      );
    } catch (error) {
      if (errorType(error)) {
        alert("No connection with api server");
      }
    }
  },
  deleteOneItem: async (dispatch, _id) => {
    try {
      await api.delete(`/events/delete/${_id}`);
      return (
        dispatch({ type: DELETE_ONE_ITEM, payload: _id }),
        dispatch({ type: GET_ITEMS }),
        alert("Successfuly connectet and delete data from api server")
      );
    } catch (error) {
      if (errorType(error)) {
        alert("No connection with api server");
      }
    }
  },
  deleteAllItems: async (dispatch) => {
    try {
      const res = await api.delete(`/events/delete`);

      return (
        dispatch({ type: DELETE_ALL_ITEMS, payload: res.data }),
        dispatch({ type: GET_ITEMS }),
        alert("Successfuly connectet and delete data from api server")
      );
    } catch (error) {
      if (errorType(error)) {
        alert("No connection with api server");
      }
    }
  },
};

export default EventsServices;
