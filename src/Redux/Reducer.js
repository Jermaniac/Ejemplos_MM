import { combineReducers } from "redux";
import { fetchReceivedReducer, fetchSentReducer } from "../mailApp/store/mailApp.reducers";

export default combineReducers({ fetchReceivedReducer, fetchSentReducer });
