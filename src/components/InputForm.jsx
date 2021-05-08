import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function InputForm() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <TextField id='filled-basic' label='身長' variant='outlined' />
      <TextField id='outlined-basic' label='体重' variant='outlined' />
    </form>
  );
}

export default InputForm;
