import { createSelector } from 'reselect'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const getVisibilityFilter = state => state.todos.visibilityFilter
const getTodos = state => state.todos.todos

export const getVisibleTodos = createSelector(
    [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    debugger
    switch (visibilityFilter) {
      case SHOW_ALL:
        return todos
      case SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        return todos

    }
  }
)
//         throw new Error('Unknown filter: ' + visibilityFilter)
export const getCompletedTodoCount = createSelector(
  [getTodos],
  todos => (
    todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )
  )
)