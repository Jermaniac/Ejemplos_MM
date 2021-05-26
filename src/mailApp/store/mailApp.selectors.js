import { createSelector } from "reselect";

// Selectores que recuperan info del store
export const selectMailsReceived = (state) => state.fetchReceivedReducer || [];
export const selectMailsSent = (state) => state.fetchSentReducer || [];
export const selectMailsDeleted = (state) => state.fetchDeletedReducer || [];

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

export const selectMailsDeletedMemoized = createSelector(
    [selectMailsDeleted],
    (mails) => {
        mails.mails?.reverse();
        return mails;
    }
)
