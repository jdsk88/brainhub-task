import React, { useEffect } from "react";
import Routes from "routes";
import { useDispatch } from "react-redux";
import EventsServices from "services/events";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    EventsServices.getItems(dispatch);
  }, [dispatch]);

  return <Routes />;
};

export default App;
