import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const initialValues = {
  weight: "",
  height: "",
  bmi: "",
};

const InputForm = () => {
  const [state, setState] = useState(initialValues);

  const handleChange = (e) => {
    let { value, name } = e.target;
    if (value > 999) {
      value = 999;
    }
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bmi = state.weight / Math.pow(state.height / 100, 2);
    setState({ ...state, bmi });
  };

  const classes = useStyles();

  return (
    <div className='InputForm'>
      <form
        className={classes.root}
        onSubmit={handleSubmit}
        noValidate
        autoComplete='off'
      >
        <TextField
          id='height'
          label='身長'
          name='height'
          variant='outlined'
          value={state.height}
          onChange={handleChange}
        />
        <TextField
          id='weight'
          label='体重'
          name='weight'
          variant='outlined'
          value={state.weight}
          onChange={handleChange}
        />
        <Button variant='contained' color='primary' type='submit'>
          BMIを計算する
        </Button>
      </form>
      {state.bmi}
    </div>
  );
};

export default InputForm;
