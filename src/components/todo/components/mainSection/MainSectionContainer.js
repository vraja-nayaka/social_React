import { connect } from 'react-redux'
import * as TodoActions from '../../actions'
import { bindActionCreators } from 'redux'
import MainSection from './MainSection'
import { getCompletedTodoCount } from '../../../../redux/todo-selectors'


const mapStateToProps = state => ({
  todosCount: state.todo.tasks.length,
  completedCount: getCompletedTodoCount(state)
})


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection)

