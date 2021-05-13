import { ResultListContainer } from "../containers/ResultListContainer";

export const BrowserBarComponent = (props) => {
  const { result, handleClick } = props;

  const wrapperStyle = {
    width: "50%",
    margin: "auto",
  };

  return (
    <div style={wrapperStyle}>
      <input type="text" id="browserbar"></input>
      <button onClick={handleClick}>SEARCH</button>
      <ResultListContainer busqueda={result}></ResultListContainer>
    </div>
  );
};
