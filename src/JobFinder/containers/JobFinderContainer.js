import React from "react";

import { useJobFinder } from "../hooks/useJobFinder";

import { JobFinderComponent } from "../../JobFinder/components/JobFinderComponent";

import { Spinner } from "../../commons/components/Spinner";

import { useDispatch } from "react-redux";
import { filter_jobs } from "../../Redux/Actions/action";

export const JobFinderContainer = () => {
  const { jobs, isFetchingJobs, filteredJobs, mappedJobs } = useJobFinder(); //saca las propriedades. no va por orden, va por nombre
  // const { jobs, isFetchingJobs, ...otherObjects } = useJobFinder();

  // toda la logica se ejecuta para cada render/update

  // const data = useSelector((state) => state.filter_jobs);
  // const data = useSelector(selectJobs);
  const dispatch = useDispatch();

  // Ejemplo donde hemos mapeado los jobs y les hemos cambiado el nombre a title por titulo
  console.log(mappedJobs);
  const handleClick = () => {
    const keyword = document.getElementById("browserbar").value;

    let result = jobs.filter((item) => {
      let searchBy = item.title.includes(keyword);
      return searchBy;
    });

    if (result.length === 0) {
      console.log(
        "No se ha encontrado resultados en titulo, buscando por descripcion..."
      );
      result = jobs.filter((item) => {
        let searchBy = item.description.includes(keyword);
        return searchBy;
      });
    }
    dispatch(filter_jobs(result));
  };

  return (
    <>
      <JobFinderComponent
        filteredJobs={filteredJobs}
        handleClick={handleClick}
      />

      {isFetchingJobs && <Spinner />}
    </>
  );
};
