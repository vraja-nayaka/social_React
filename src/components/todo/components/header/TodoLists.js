import React from "react";
import TodoTextInput from "../common/TodoTextInput";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  main: {
    padding: 20
  }
}));

const TodoLists = ({
  todoLists,
  postTodoList,
  requestTodoLists,
  deleteTodoList
}) => {
  const classes = useStyles();
  const newTodoList = title => {
    if (title.length !== 0) {
      postTodoList(title);
    }
  };
  return (
    <>
      <Button variant="contained" color="primary" onClick={requestTodoLists}>
        Request Lists
      </Button>

      <ul>
        {todoLists.map(item => (
          <li key={item.id}>
            <div>
              {item.title}
              <IconButton
                aria-label="delete"
                onClick={() => deleteTodoList(item.id)}
                edge="end"
              >
                <DeleteIcon fontSize="small" color="disabled" />
              </IconButton>
            </div>
          </li>
        ))}
      </ul>

      <div>
        <TodoTextInput
          newTodo
          label="New todo List"
          onSave={newTodoList}
          placeholder="New todo List?"
        />
      </div>
    </>
  );
};

export default TodoLists;
