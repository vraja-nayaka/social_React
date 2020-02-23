import { connect } from 'react-redux'
import TodoTasks from './tasks/TodoTasks'
import { requestTodoListTasks, postTodoListTasks } from '../../redux/todo-reducer'


const mapStateToProps = state => ({
  todoLists: state.todo.todoLists,
  todosCount: state.todo.tasks.length,
})

const mapDispatchToProps = () => ({
  requestTodoListTasks,
  postTodoListTasks,
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoTasks)
