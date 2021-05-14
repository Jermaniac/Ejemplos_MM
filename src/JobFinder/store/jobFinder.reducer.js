import {
  FETCH_JOBS_INIT,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR,
} from "./jobFinder.actions";

// export const example_reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [...action.payload.data];
//     default:
//       return state;
//   }
// };

// export const filter_jobs = (state = [], action) => {
//   switch (action.type) {
//     case FILTER_JOBS:
//       return [...action.payload.data];
//     default:
//       return state;
//   }
// };

const initialState = {
  jobs: [],
};

// export const jobFinder = (state = )
