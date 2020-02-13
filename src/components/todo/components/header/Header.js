import React from "react";
import PropTypes from "prop-types";
import TodoTextInput from "../common/TodoTextInput";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  main: {
    padding: 20
  }
}));

const Header = ({
  todoLists,
  addTodo,
  requestTodoLists
}) => {
  const classes = useStyles();
  const saveText = text => {
    if (text.length !== 0) {
      addTodo(text);
    }
  };

  if (todoLists.length === 0) {
    requestTodoLists();
  }

  return (
    <header>
       <div className={classes.main}>
        <TodoTextInput
          newTodo
          label="New task"
          onSave={saveText}
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
