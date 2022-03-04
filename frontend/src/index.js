import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./services/reportWebVitals";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "store";
import { BrowserRouter } from "react-router-dom";
import config from "store/config";
import Zoom from "@mui/material/Zoom";
import { SnackbarProvider } from "notistack";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider
        preventDuplicate
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        TransitionComponent={Zoom}
        iconVariant={{
          success: "✅",
          error: "✖️",
          warning: "⚠️",
          info: "ℹ️",
        }}
        maxSnack={3}
      >
        <BrowserRouter basename={config.basename}>
          <App />
        </BrowserRouter>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
