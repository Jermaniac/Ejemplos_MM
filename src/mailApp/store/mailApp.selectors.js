import { createSelector } from "reselect";

// Selectores que recuperan info del store
export const selectMailsReceived = (state) => state.fetchReceivedReducer || [];
export const selectMailsSent = (state) => state.fetchSentReducer || [];

// Selectores que usan los anteriores para coger los mails del store e invertir su orden
export const selectMailsReceivedMemoized = createSelector(
    [selectMailsReceived],
    (mails) => {
        mails.mails?.reverse();
        return mails;
    }
)

export const selectMailsSentMemoized = createSelector(
    [selectMailsSent],
    (mails) => {
        mails.mails?.reverse();
        return mails;
    }
)
