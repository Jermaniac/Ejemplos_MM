import { combineReducers } from "redux";
import { fetchMailsReceived } from "../mailApp/store/mailApp.reducers";

export default combineReducers({ fetchMailsReceived });
