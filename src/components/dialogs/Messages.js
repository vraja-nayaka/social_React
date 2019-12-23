import React from 'react'
import { NavLink } from 'react-router-dom'
import { Field, reset, reduxForm } from 'redux-form'
import { requiredMessage, maxLength30, Input } from './../../utils/validators'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'

import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import SearchIcon from '@material-ui/icons/Search'
import SendSharpIcon from '@material-ui/icons/SendSharp'

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  paper: {
    paddingBottom: 60
  },
  list: {
    marginBottom: theme.spacing(2)
  },
  subheader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    maxWidth: 876,
    left: 'auto',
    right: 'auto'
    },
  grow: {
    flexGrow: 1
  }
}))

const Messages = ({ messages, sendMessage }) => {
  
  const classes = useStyles()

  const MessagesElements = messages.map(({ id, message }) => (
    <React.Fragment key={id}>
      {id === 1 && (
        <ListSubheader className={classes.subheader}>Today</ListSubheader>
      )}
      {id === 3 && (
        <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>
      )}
      <ListItem button>
        <ListItemText primary={message} />
      </ListItem>
    </React.Fragment>
  ))

  const pathLink = React.forwardRef((props, ref) => (
    <NavLink innerRef={ref} to={'/dialogs'} {...props} />
  ))
  return (
    <div>
         <Button type="submit" variant="contained" size="small" color="primary" component={pathLink}>
          «« back
        </Button>
      <Typography className={classes.text} variant="h5" gutterBottom>
        Сообщения
      </Typography>
      <Paper square className={classes.paper}>
        <List className={classes.list}>{MessagesElements}</List>
      </Paper>
      <AddMessageReduxForm
        onSubmit={({ newMessage }) => sendMessage(newMessage)}
      />
    </div>
  )
}

const AddMessageForm = ({ handleSubmit }) => {
  const classes = useStyles()
  return (
    <AppBar position="fixed" color="secondary" className={classes.appBar}>
      <Toolbar>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <form onSubmit={handleSubmit}>
          <Field
            placeholder="Введите Ваше сообщение"
            component={Input}
            validate={[requiredMessage, maxLength30]}
            name="newMessage"
            type="text"
          />
          <Button onSubmit={handleSubmit} type="submit" color="inherit">
            <SendSharpIcon />
          </Button>
        </form>
      </Toolbar>
    </AppBar>
  )
}


const afterSubmit = (result, dispatch) =>
  dispatch(reset('newMessage'));

const AddMessageReduxForm = reduxForm({
  form: 'newMessage',
  onSubmitSuccess: afterSubmit
})(AddMessageForm)

export default Messages
