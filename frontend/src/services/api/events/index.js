import api from "services/api";
import {
  SET_ITEMS,
  CREATE_ITEM,
  UPDATE_ITEM,
  DELETE_ONE_ITEM,
  DELETE_ALL_ITEMS,
  GET_ITEMS,
  SET_INITIAL_STATE,
} from "store/actions";

const errorType = (error) => error.toJSON().message === "Network Error";

const EventsServices = {
  getItems: async (dispatch, Snackbar) => {
    try {
      const res = await api.get(`/events`);
      return (
        dispatch({ type: SET_ITEMS, payload: res.data }),
        Snackbar(
          "Successfuly connected and get data from api server",
          "success"
        )
      );
    } catch (error) {
      if (errorType(error)) {
        Snackbar("No connection with api server", "error");
      }
    }
  },
  initialState: async (dispatch, Snackbar) => {
    try {
      await api.delete(`/events/delete`);
      const res = await api.get("/events/initialState");
      return (
        dispatch({ type: SET_INITIAL_STATE, payload: res.data }),
        Snackbar(
          "Successfuly connected and get data from api server",
          "success"
        )
      );
    } catch (error) {
      if (errorType(error)) {
        Snackbar("No connection with api server", "error");
      }
    }
  },
  createItem: async (dispatch, data, Snackbar) => {
    try {
      const res = await api.post(`/events/create`, data);

      return (
        dispatch({ type: CREATE_ITEM, payload: res.data }),
        Snackbar(
          "Successfuly connected and post data to api server",
          "success",
          "success"
        )
      );
    } catch (error) {
      if (errorType(error)) {
        Snackbar("No connection with api server", "error", "error");
      }
    }
  },
  updateItem: async (dispatch, data, Snackbar) => {
    try {
      await api.put(`/events/${data._id}`, data);
      return (
        dispatch({ type: UPDATE_ITEM, payload: data }),
        Snackbar("Successfuly connected and put data to api server", "success")
      );
    } catch (error) {
      if (errorType(error)) {
        Snackbar("No connection with api server", "error");
      }
    }
  },
  deleteOneItem: async (dispatch, _id, Snackbar) => {
    try {
      await api.delete(`/events/delete/${_id}`);
      return (
        dispatch({ type: DELETE_ONE_ITEM, payload: _id }),
        dispatch({ type: GET_ITEMS }),
        Snackbar(
          "Successfuly connected and delete data from api server",
          "success"
        )
      );
    } catch (error) {
      if (errorType(error)) {
        Snackbar("No connection with api server", "error");
      }
    }
  },
  deleteAllItems: async (dispatch, Snackbar) => {
    try {
      const res = await api.delete(`/events/delete`);

      return (
        dispatch({ type: DELETE_ALL_ITEMS, payload: res.data }),
        dispatch({ type: GET_ITEMS }),
        Snackbar(
          "Successfuly connected and delete data from api server",
          "success"
        )
      );
    } catch (error) {
      if (errorType(error)) {
        Snackbar("No connection with api server", "error");
      }
    }
  },
};

export default EventsServices;
