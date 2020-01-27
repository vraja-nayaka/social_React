import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'
import style from '../todo.module.css'

const Header = ({ addTodo }) => (
  <header >
    <h1 className={style.title}>todos</h1>
    <TodoTextInput
      newTodo
      onSave={(text) => {
        if (text.length !== 0) {
          addTodo(text)
        }
      }}
      placeholder="What needs to be done?"
    />
  </header>
)

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
