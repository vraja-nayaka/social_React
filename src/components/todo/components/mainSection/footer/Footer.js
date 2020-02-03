import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from './FilterLinkContainer'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../../constants/TodoFilters'
import style from '../mainSection.module.css'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

const Footer = (props) => {
  const { activeCount, completedCount, onClearCompleted } = props
  const itemWord = activeCount === 1 ? 'item' : 'items'
  return (
    <footer className={style.footer}>
      <span className={style.todo_count}>
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
      <ul className={style.filters}>
        {Object.keys(FILTER_TITLES).map(filter =>
          <li key={filter}>
            <FilterLink filter={filter}>
              {FILTER_TITLES[filter]}
            </FilterLink>
          </li>
        )}
      </ul>
      {
        !!completedCount &&
        <button
          className={style.clear_completed}
          onClick={onClearCompleted}
        >Clear completed</button>
        
      }
    </footer>
  )
}

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
}

export default Footer
