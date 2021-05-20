import { createSelector } from "reselect";

export const selectMailsReceived = (state) => state.fetchMailsReceived || [];

export const selectMailsSent = (state) => state.fetchMailsSent || [];

export const selectMailsReceivedMemoized = createSelector([selectMailsReceived], (mails) => {(
    mails.mails?.reverse()
    )
})
