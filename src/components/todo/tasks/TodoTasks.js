import React from "react";
import TodoItem from "./TodoItem";
import style from "../todo.module.css";
import Button from "@material-ui/core/Button";
import TodoTextInput from "../common/TodoTextInput";


const TodoTasks = ({
  requestTodoListTasks,
  postTodoListTasks,
  todoLists,
  todosCount
}) => {
  const saveText = (todolistId, text) => {
    if (text.length !== 0) {
      postTodoListTasks(todolistId, text);
    }
  };
  return <>
    <Button variant="contained" color="primary" onClick={requestTodoListTasks}>
      Request todos
      </Button>
    <ul className={style.todo_list}>
      {todoLists.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}

      <TodoTextInput
        newTodo
        label="New task"
        onSave={saveText}
        placeholder="What needs to be done?"
      />
    </ul>
  </>
};


export default TodoTasks;
