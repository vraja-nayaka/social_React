import { connect } from 'react-redux'
import * as TodoActions from './actions'
import { bindActionCreators } from 'redux'
import TodoTasks from './tasks/TodoTasks'
import { getCompletedTodoCount } from '../../redux/todo-selectors'
import { getVisibleTodos } from '../../redux/todo-selectors'
import { requestTodoListTasks } from '../../redux/todo-reducer'
import {
  requestTodoLists,
  addTodo,
  postTodoListTasks,
  deleteTodoList,
  putTodoList
} from "../../redux/todo-reducer";

const mapStateToProps = state => ({
  todoLists: state.todo.todoLists,
  todosCount: state.todo.tasks.length,
  completedCount: getCompletedTodoCount(state),
  filteredTodos: getVisibleTodos(state)
})


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
  requestTodoListTasks,
  addTodo,
  requestTodoLists,
  postTodoListTasks,
  deleteTodoList,
  putTodoList
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoTasks)
