import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import style from "../todo.module.css";
import Button from "@material-ui/core/Button";
import TodoTextInput from "../common/TodoTextInput";


const TodoTasks = ({
  filteredTodos,
  actions,
  requestTodoListTasks,
  getVisibleTodos,
  getCompletedTodoCount,
  todoLists,
  addTodo,
  requestTodoLists,
  postTodoList,
  deleteTodoList,
  putTodoList
}) => {
  const saveText = text => {
    if (text.length !== 0) {
      addTodo(text);
    }
  };
  return  <>
    <Button variant="contained" color="primary" onClick={requestTodoListTasks}>
      Request todos
      </Button>
    <ul className={style.todo_list}>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} {...actions} />
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

TodoTasks.propTypes = {
  filteredTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  actions: PropTypes.object.isRequired
};

export default TodoTasks;
