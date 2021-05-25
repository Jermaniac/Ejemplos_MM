import { combineReducers } from "redux";
import { fetchReceivedReducer, fetchSentReducer, fetchDeletedReducer } from "../mailApp/store/mailApp.reducers";

export default combineReducers({ fetchReceivedReducer, fetchSentReducer, fetchDeletedReducer });
