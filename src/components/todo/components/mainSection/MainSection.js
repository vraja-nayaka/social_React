import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'
import style from '../todo.module.css'


const MainSection = ({ todosCount, completedCount, actions }) =>
  (
    <section className={style.main}>
      {
        !!todosCount && 
        <span>
          <input
            className={style.toggle_all}
            type="checkbox"
            checked={completedCount === todosCount}
            readOnly
          />
          <label onClick={actions.completeAllTodos}/>
        </span>
      }
      <VisibleTodoList />
      {
        !!todosCount &&
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={actions.clearCompleted}
        />
      }
    </section>
  )

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection;