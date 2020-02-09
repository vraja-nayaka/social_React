import { connect } from "react-redux";
import TodoLists from "./lists/TodoLists";
import { addTodo } from "./actions";
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

import {
  requestTodoLists,
  addTodoList,
  postTodoList,
  deleteTodoList,
  putTodoList
} from "../../redux/todo-reducer";

const mapStateToProps = state => ({
  todoLists: state.todo.todoLists
});


export default compose(
  withAuthRedirect,
  connect(
    mapStateToProps,
    {
      addTodo,
      requestTodoLists,
      addTodoList,
      postTodoList,
      deleteTodoList,
      putTodoList
    }
  )
)(TodoLists)
