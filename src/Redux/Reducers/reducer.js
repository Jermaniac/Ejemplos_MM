import {ADD, FILTER_JOBS} from '../Types/types'

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
