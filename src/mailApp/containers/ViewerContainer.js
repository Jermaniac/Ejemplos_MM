import { ViewerComponent } from "../components/ViewerComponent"

export const ViewerContainer = ({mailSelected, handleDeleteMail}) => {

    return(
            <ViewerComponent mailSelected={mailSelected} handleDeleteMail={handleDeleteMail}/>
    )
}