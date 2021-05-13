import { useEffect, useState } from "react";

import { fetchJobs } from "../services/jobFinder.service";

export const useJobFinder = () => {
  const [jobs, setJobs] = useState([]);
  const [isFetchingJobs, setIsFetchingJobs] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState([]);

  /* // TEORIA
  setJobs() => setState()
  jobs = state.jobs
  
  useEffect(() => {
    //callback
  }, [props]); // se modifica cada vez que cambian las props
  */

  // Este useEffect hace la llamada a la api
  useEffect(() => {

    const initFetchJobs = async () => {
      setIsFetchingJobs(true);
      const fetchedJobs = await fetchJobs();
      setJobs(fetchedJobs);
      setIsFetchingJobs(false);
    };

    initFetchJobs();

  }, []); //  = componentDidMount

  return {
    jobs,
    isFetchingJobs,
    filteredJobs,
    setFilteredJobs
  };
};
