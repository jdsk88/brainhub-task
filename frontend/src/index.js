import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./services/reportWebVitals";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "store";
import { BrowserRouter } from "react-router-dom";
import config from "store/config";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={config.basename}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
