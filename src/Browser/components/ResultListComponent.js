
export const ResultListComponent = ({busqueda}) => {

    return (
<>
        <table>
            {
                busqueda.map( (item) => {
                return(
                    <>
                        <tr>
                            <th>{item.title}​​​​​</th>
                        </tr>
                        <tr>
                            <td>{item.description}</td>
                        </tr>
                    </>
                )
                })
            }
            
        </table>
    </>

    )
}