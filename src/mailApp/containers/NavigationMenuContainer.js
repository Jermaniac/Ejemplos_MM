import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
//import { makeStyles } from '@material-ui/core/styles';

const buttonStyle = {
    margin:"5px 10px"
}

const newMessageStyle ={
    color: "black",
    background: "lightblue",
    marginTop: "10px",
    marginBottom: "20px",
    marginLeft: "10px",
    marginRight: "10px"

}

// const useStyles = makeStyles((theme) => ({
//     root: {
//       backgroundColor: "green",
//     },
//   }));

export const NavigationMenuContainer = () => {

    //const classes = useStyles();

    return(
        <ButtonGroup /*className = {classes.root}*/
            orientation="vertical"
            color="primary"
            aria-label="vertical outlined primary button group"
            variant="contained"
        >
            <Button style={newMessageStyle}>New Message</Button>
            <Button style={buttonStyle}>Inbox</Button>
            <Button style={buttonStyle}>Sent</Button>
            <Button style={buttonStyle}>Trash</Button>
            <Button style={buttonStyle}>Archive</Button>
        </ButtonGroup>
    )

}