import React from 'react'
import PropTypes from 'prop-types'
import Footer from './footer/Footer'
import VisibleTodoListContainer from './visibleTodoList/VisibleTodoListContainer'
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
            onChange={actions.completeAllTodos}
          />
          <label onClick={actions.completeAllTodos}/>
        </span>
      }
      <VisibleTodoListContainer />
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