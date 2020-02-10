import React from "react";
import TodoTextInput from "../common/TodoTextInput";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {}
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
  return (
    <>
      <Button variant="contained" color="primary" onClick={requestTodoLists}>
        Request Lists
      </Button>
      <Grid container className={classes.root} spacing={2}>
        {todoLists.map(item => (
          <Grid item xs={3} key={item.id}>
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
                aria-label="delete"
                onClick={() => putTodoList(item.id, "renamed title")}
              >
                <EditIcon fontSize="small" />
              </IconButton>
            </Button>
          </Grid>
        ))}

        <div>
          <TodoTextInput
            newTodo
            label="New todo List"
            onSave={newTodoList}
            placeholder="New todo List?"
          />
        </div>
      </Grid>
    </>
  );
};

export default TodoLists;
