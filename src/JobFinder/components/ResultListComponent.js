
export const ResultListComponent = ({busqueda}) => {
    
    return (
        <>
                {
                    busqueda.map( (item) => {
                        return (
                            <table key={item.id}>
                                <thead>
                                    <tr>
                                        <th>{item.title}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td dangerouslySetInnerHTML={{__html: item.description}}></td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    })
                }
        </>
    );

};
