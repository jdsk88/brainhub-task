import { combineReducers } from "redux";
import eventsReducer from "./eventsReducer.js";
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  console.log(
    `%c
_______________________________________________________
█                                                     █
█   ██████ ████████ ██████ ██████ ███████       =█=   █
█     ██   ██         ██   ██     ██    ██     =███=  █
█     ██   ████████   ██   ████   ███████     =█ █ █= █
█     ██         ██   ██   ██     ██    ██     =███=  █
█   ██████ ████████   ██   ██████ ██    ██      =█=   █  
█_____________________________________________________█
 
 copyrigths to Maciej Jakobszy ©️           www.ister.pl
`,
    "font-family:monospace;color:#1976d2;font-size:12px;color:lightgreen"
  );
}
const reducer = combineReducers({
  events: eventsReducer,
});

export default reducer;
