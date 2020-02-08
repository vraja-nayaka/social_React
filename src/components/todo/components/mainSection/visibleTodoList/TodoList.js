import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import style from '../mainSection.module.css';
import Button from "@material-ui/core/Button";

const TodoList = ({ filteredTodos, actions, requestTodoListTasks }) => (
  <>
    {/* <Button variant="contained" color="primary" onClick={requestTodoListTasks}>
      Request todos
      </Button> */}
    <ul className={style.todo_list}>
      {filteredTodos.map(todo =>
        <TodoItem key={todo.id} todo={todo} {...actions} />
      )}
    </ul>
  </>
)

TodoList.propTypes = {
  filteredTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired
}

export default TodoList
