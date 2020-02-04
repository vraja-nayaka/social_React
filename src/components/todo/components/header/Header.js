import React from "react";
import PropTypes from "prop-types";
import TodoTextInput from "../common/TodoTextInput";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  main: {
    padding: 20,
  }
}));

const Header = ({ addTodo }) => {
  const classes = useStyles();
  return (
    <header>
      <div className={classes.main}>
      <TodoTextInput
        newTodo
        label="New task"
        onSave={text => {
          if (text.length !== 0) {
            addTodo(text);
          }
        }}
        placeholder="What needs to be done?"
      />
      </div>
    </header>
  );
};

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
