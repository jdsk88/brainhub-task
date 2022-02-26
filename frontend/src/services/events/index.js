import api from "services/api";
import {
  CREATE_ITEM,
  UPDATE_ITEM,
  DELETE_ONE_ITEM,
  DELETE_ALL_ITEMS,
  SET_ITEMS,
} from "store/actions";

const EventsServices = {
  getAll: async (dispatch) => {
    const res = await api.get(`/events`);
    return dispatch({
      type: SET_ITEMS,
      payload: res.data,
    });
  },
};
export default EventsServices;
