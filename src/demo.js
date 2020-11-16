import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const if1 = useRef(null);
  const if2 = useRef(null);
  const if3 = useRef(null);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Standard"
        inputRef={if1}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            if2.current.focus();
          }
        }}
      />
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        inputRef={if2}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            if3.current.focus();
          }
        }}
      />
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        inputRef={if3}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            if1.current.focus();
          }
        }}
      />
    </form>
  );
}
