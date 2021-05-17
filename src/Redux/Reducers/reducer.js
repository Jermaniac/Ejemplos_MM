export const ADD="ADD";
export const SHOW ="SHOW"

export const FILTER_JOBS = "FILTER_JOBS"

export const example_reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...action.payload.data];
    default:
      return state;
  }
};

export const filter_jobs = (state = [], action) => {
  switch (action.type) {
    case FILTER_JOBS:
      return [...action.payload.data];
    default:
      return state;
  }
};
