import {ResultListComponent} from '../components/ResultListComponent'

export const ResultListContainer = ({busqueda}) => {
   // console.log(busqueda.length);
   // console.log(busqueda);
   
        return(
            <>
                <ResultListComponent busqueda={busqueda}></ResultListComponent>
            </>
        );
}