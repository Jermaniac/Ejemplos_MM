import {ResultListContainer} from '../containers/ResultListContainer'

export const BrowserBarComponent = (props) => {

    const { result, handleClick} = props;
    
    return (
        <>
            <input type="text" id="ejemplo"></input>
            <button onClick={handleClick}>Search</button>
            <ResultListContainer busqueda={result} ></ResultListContainer>
        </>
    );

};