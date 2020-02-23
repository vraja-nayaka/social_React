import React, { Component } from 'react'
import TodoTextInput from '../common/TodoTextInput'
import style from '../todo.module.css'

export default class TodoItem extends Component {

  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       label="Edit task"
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(todo.id, text)} />
      )
    } else {
      element = (
        <div className={style.view}>
          <input className={style.toggle}
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => completeTodo(todo.id)} />
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>
          <button variant="outlined" color="inherit" className={style.destroy}
                  onClick={() => deleteTodo(todo.id)} />
        </div>
      )
    }

    return (
      <li >
        {element}
      </li>
    )
  }
}
