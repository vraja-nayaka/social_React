import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import TextField from '@material-ui/core/TextField';


export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }

  state = {
    text: this.props.text || ''
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  render() {

    return (
      <div>
        <TextField id="outlined-basic" label="New todo" variant="outlined"
          className={cn({
            'style.edit': this.props.editing,
            'style.new_todo': this.props.newTodo
          })}
          placeholder={this.props.placeholder}
          autoFocus={true}
          value={this.state.text}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit} />
      </div>
    )
  }
}
