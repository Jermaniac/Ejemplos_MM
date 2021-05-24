import { createSelector } from "reselect";

// Selectores que recuperan info del store
export const selectMailsReceived = (state) => state.fetchMailsReceived || [];
export const selectMailsSent = (state) => state.fetchMailsSent || [];

// Selectores que usan los anteriores para coger los mails del store e invertir su orden
export const selectMailsReceivedMemoized = createSelector(
    [selectMailsReceived],
    ({mails}) => {
        mails?.reverse()
    }
)

export const selectMailsSentMemoized = createSelector(
    [selectMailsSent],
    ({mails}) => mails?.reverse()
)
