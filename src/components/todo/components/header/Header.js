import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from '../common/TodoTextInput'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  main: {

  },

}));

const Header = ({ addTodo }) => {
  const classes = useStyles();
  return <header>
    <Typography variant="h6" component="h6">todos</Typography>
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
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
