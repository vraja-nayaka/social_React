import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../../../actions'
import TodoList from './TodoList'
import { getVisibleTodos } from '../../../../../redux/todo-selectors'
import { requestTodoListTasks } from '../../../../../redux/todo-reducer'


const mapStateToProps = state => ({
  filteredTodos: getVisibleTodos(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
  requestTodoListTasks
})


const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
