import { combineReducers } from "redux";
import { fetchMailsReceived, fetchMailsSent } from "../mailApp/store/mailApp.reducers";

export default combineReducers({ fetchMailsReceived, fetchMailsSent });
