import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_ITEMS } from "./store/actions";

const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_ITEMS });
  }, [dispatch]);

  return <></>;
};

export default App;
