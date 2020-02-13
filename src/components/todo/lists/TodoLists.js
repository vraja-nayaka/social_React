import React from "react";
import TodoTextInput from "../common/TodoTextInput";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexDirection: "row"
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
      <Grid container>
        {todoLists.map(item => (
          <Grid className={classes.root} item xs={3} key={item.id}>
            <Button variant="contained" color="secondary" size="small">
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
            </Button>

{/* !!TASKS HERE! */}

          </Grid>
        ))}
        <TodoTextInput
          newTodo
          label="New todo List"
          onSave={newTodoList}
          placeholder="New todo List?"
        />
      </Grid>
    </>
  );
};

export default TodoLists;
