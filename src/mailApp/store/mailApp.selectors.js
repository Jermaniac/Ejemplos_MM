import { createSelector } from "reselect";

// Selectores que recuperan info del store
export const selectStateReceived = (state) => state.fetchReceivedReducer || [];
export const selectStateSent = (state) => state.fetchSentReducer || [];
export const selectStateDeleted = (state) => state.fetchDeletedReducer || [];

// Selectores que usan los anteriores para coger los mails del store e invertir su orden
export const selectStateReceivedMemoized = createSelector(
    [selectStateReceived],
    (currentState) => {
        currentState.mails?.reverse();
        return currentState
    }
)

export const selectStateSentMemoized = createSelector(
    [selectStateSent],
    (currentState) => {
        currentState.mails?.reverse();
        return currentState
    }
)

export const selectStateDeletedMemoized = createSelector(
    [selectStateDeleted],
    (currentState) => {
        currentState.mails?.reverse();
        return currentState
    }
)
