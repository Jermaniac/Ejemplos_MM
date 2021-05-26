import { ResultListContainer } from "../containers/ResultListContainer";

export const JobFinderComponent = (props) => {
  const { filteredJobs , handleClick } = props;

  const wrapperStyle = {
    width: "50%",
    margin: "auto",
  };

  return (
    <div style={wrapperStyle}>
      <input type="text" id="browserbar"></input>
      <button className="btn btn-primary" onClick={handleClick}>SEARCH</button>
      <ResultListContainer busqueda={filteredJobs}></ResultListContainer>
    </div>
  );
};
