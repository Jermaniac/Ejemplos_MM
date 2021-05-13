import axios from "axios";

const url = "/positions.json?description=api";

export const fetchJobs = () => axios.get(url).then((response) => response.data);
