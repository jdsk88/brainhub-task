import React, { useEffect } from "react";
import Routes from "routes";
import { useDispatch } from "react-redux";
import EventsServices from "services/api/events";
import { useSnackbar } from "notistack";
const App = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const Snackbar = (msg, variant) => {
    enqueueSnackbar(msg, { variant });
  };
  useEffect(() => {
    EventsServices.getItems(dispatch, Snackbar);
  }, [dispatch]);

  return <Routes />;
};

export default App;
