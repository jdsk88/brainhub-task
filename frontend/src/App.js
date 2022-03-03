import React, { useCallback, useEffect } from "react";
import Routes from "routes";
import { useDispatch } from "react-redux";
import EventsServices from "services/api/events";
import { useSnackbar } from "notistack";
const App = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const Snackbar = useCallback(
    (msg, variant) => {
      enqueueSnackbar(msg, { variant });
    },
    [enqueueSnackbar]
  );
  useEffect(() => {
    EventsServices.getItems(dispatch, Snackbar);
  }, [dispatch, Snackbar]);

  return <Routes />;
};

export default App;
