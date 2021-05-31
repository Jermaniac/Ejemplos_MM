import { Button as MuiButton, makeStyles} from '@material-ui/core'

const styledCloseButton = makeStyles({
    root: {
      backgroundColor: "white",
      color: "black",
      borderRadius: "10px",
      minWidth:"30px",
      border: "1px black solid",
      "&:hover": {
        backgroundColor:"#E81123",
        color:"white",
      }
    },
  });

export const MyButton = (props) => {
    const { text, size, color, variant, onClick, close = false, ...other} = props;

    const styles = styledCloseButton();

    if (close) {
        return (
            <MuiButton
                variant={variant || "contained"}
                size={size || "medium"}
                color={color || "primary"}
                onClick={onClick}
                {...other}
                className={styles.root}
                >
                {text}
            </MuiButton>
        )
    }
    else {
        return (
            <MuiButton
                variant={variant || "contained"}
                size={size || "medium"}
                color={color || "primary"}
                onClick={onClick}
                {...other}>
                {text}
            </MuiButton>
        )
    }


}
