import { createSelector } from "reselect";

export const selectJobs = (state) => state.filter_jobs || [];

export const selectMappedJobs = (state) =>
  state.filter_jobs?.map((job) => ({
    id: job.id,
    titulo: job.title,
  }));

export const selectMemoizedMappedJobs = createSelector([selectJobs], (jobs) => {
  return jobs?.map((job) => ({
    id: job.id,
    titulo: job.title,
  }));
});
