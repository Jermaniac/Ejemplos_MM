// import { createSelector } from "reselect";

export const selectMailsReceived = (state) => state.fetchMailsReceived || [];

// export const selectMailsReceivedMemoized = createSelector([selectMailsReceived],(state) => state.fetchMailsReceived || [])
