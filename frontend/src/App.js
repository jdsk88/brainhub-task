import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import EventsServices from "services/events";
import { GET_ITEMS } from "./store/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    EventsServices.getAll(dispatch);
    dispatch({ type: GET_ITEMS });
  }, [dispatch]);

  return <></>;
};

export default App;
