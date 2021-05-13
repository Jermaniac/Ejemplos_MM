import React, { useEffect, useState } from "react";

import { useJobFinder } from "../hooks/useJobFinder";

import {
  BrowserBarComponent,
  BrowserBarComponent as JobFinderComponent,
} from "../../Browser/components/BrowserBarComponent";

import { Spinner } from "../../commons/components/Spinner";

export const JobFinderContainer = ({}) => {
  const { jobs, isFetchingJobs, ...otherObjects } = useJobFinder(); //saca las propriedades. no va por orden

  // toda la logica se ejecuta para cada render/update

  return (
    <>
      {isFetchingJobs && <Spinner />}

      <JobFinderComponent result={jobs} handleClick={() => {}} />
    </>
  );
};
