export const FETCH_JOBS_INIT = "JOBFINDER/FETCH_JOBS_INIT";
export const FETCH_JOBS_SUCCESS = "JOBFINDER/FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_ERROR = "JOBFINDER/FETCH_JOBS_ERROR";

export const fetchJobsInit = () => ({
  type: FETCH_JOBS_INIT,
  payload: {},
});

export const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: jobs,
});

export const fetchJobsError = (error) => ({
  type: FETCH_JOBS_ERROR,
  payload: error,
});
