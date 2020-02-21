import React from "react";
import TodoTextInput from "../common/TodoTextInput";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "auto",
    overflow: "hidden",
    overflowX: "scroll",
    whiteSpace: "nowrap"
  },
  child: {
    display: "inline-block",
    verticalAlign: "top",
    width: 220,
    height: 60
  }
}));

const TodoLists = ({
  todoLists,
  requestTodoLists,
  addTodoList,
  postTodoList,
  deleteTodoList,
  putTodoList
}) => {
  const classes = useStyles();
  const newTodoList = title => {
    if (title.length !== 0) {
      postTodoList(title);
    }
  };
  if (todoLists.length === 0) {
    requestTodoLists();
  }

  return (
    <>
      <div className={classes.root}>
        {todoLists.map(item => (
          <div className={classes.child} key={item.id}>
            <Paper>
              {item.title}
              <IconButton
                aria-label="delete"
                onClick={() => deleteTodoList(item.id)}
                edge="end"
              >
                <DeleteIcon fontSize="small" color="disabled" />
              </IconButton>
              <IconButton
                aria-label="rename"
                onClick={() => putTodoList(item.id, "renamed title")}
              >
                <EditIcon fontSize="small" />
              </IconButton>
              <div>Tasks here</div>
            </Paper>
          
          </div>
        ))}
        <div className={classes.child}>
          <TodoTextInput
            newTodo
            label="New todo List"
            onSave={newTodoList}
            placeholder="New todo List?"
          />
        </div>
      </div>
    </>
  );
};

export default TodoLists;
