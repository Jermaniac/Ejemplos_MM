import {ResultListContainer} from '../containers/ResultListContainer'

export const BrowserBarComponent = (props) => {

    const { result, handleClick } = props;

    return (
        <>
            <input type="text" id="browserbar"></input>
            <button onClick={handleClick}>SEARCH</button>
            <ResultListContainer busqueda={result}></ResultListContainer>
        </>
    );

};

