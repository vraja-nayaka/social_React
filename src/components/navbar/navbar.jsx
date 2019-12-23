import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import AccountIcon from '@material-ui/icons/AccountCircleSharp'
import ChatIcon from '@material-ui/icons/Chat'
import PeopleIcon from '@material-ui/icons/People'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  root: {

  },
});

export default function Navbar() {
  const [value, setValue] = React.useState(0)
const classes = useStyles();
  const toDialogs = React.forwardRef((props, ref) => (
    <NavLink innerRef={ref} to={'/dialogs'} {...props} />
  ))
  const toProfile = React.forwardRef((props, ref) => (
    <NavLink innerRef={ref} to={'/profile'} {...props} />
  ))
  const toUsers = React.forwardRef((props, ref) => (
    <NavLink innerRef={ref} to={'/users'} {...props} />
  ))


  return (
    <Paper>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
            showLabels
        className={classes.root}
      >
      {/* TODO: 
      !ButtonNavigation onChange fron URL
      */}
        <BottomNavigationAction
          label="Profile"
          component={toProfile}
          icon={<AccountIcon />}
        />
        <BottomNavigationAction
          label="Dialogs"
          component={toDialogs}
          icon={<ChatIcon />}
        />
        <BottomNavigationAction
          label="Users"
          component={toUsers}
          icon={<PeopleIcon />}
        />
      </BottomNavigation>
    </Paper>
  )
}
