import React from "react";
import PropTypes from "prop-types";
import TodoTextInput from "../common/TodoTextInput";
import TodoLists from "./TodoLists";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  main: {
    padding: 20
  }
}));

const Header = ({ todoLists, addTodo, requestTodoLists, addTodoLists }) => {
  const classes = useStyles();
  const saveText = text => {
    if (text.length !== 0) {
      addTodo(text);
    }
  };

  return (
    <header>
      {/* <div className={classes.main}>
        <TodoLists todoLists={todoLists} addTodoLists={addTodoLists} requestTodoLists={requestTodoLists}/>
      </div> */}

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
