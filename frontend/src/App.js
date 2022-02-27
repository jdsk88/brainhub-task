import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Routes from "routes";
import EventsServices from "services/events";
import { GET_ITEMS } from "./store/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    EventsServices.setItems(dispatch);
    dispatch({ type: GET_ITEMS });
  }, [dispatch]);

  return <Routes />;
};

export default App;
