import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import AccountIcon from '@material-ui/icons/AccountCircleSharp'
import ChatIcon from '@material-ui/icons/Chat'
import PeopleIcon from '@material-ui/icons/People'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  root: {

  }
})

export default withRouter(function Navbar({ location }) {
  const classes = useStyles()
  const [value, setValue] = useState(null)
  let path = location.pathname.split('/')[1]

  const updateNavigation = path => {
    switch (path) {
      case 'profile':
        return setValue(0)
      case 'dialogs':
        return setValue(1)
      case 'users':
        return setValue(2)
      default:
        return setValue(null)
    }
  }

  useEffect(() => {
    updateNavigation(path)
  }, [path])

  return (
    <Paper>
      <BottomNavigation value={value} showLabels className={classes.root}>
        <BottomNavigationAction
          label="Profile"
          component={NavLink}
          to={'/profile'}
          icon={<AccountIcon />}
        />
        <BottomNavigationAction
          label="Dialogs"
          component={NavLink}
          to={'/dialogs'}
          icon={<ChatIcon />}
        />
        <BottomNavigationAction
          label="Users"
          component={NavLink}
          to={'/users'}
          icon={<PeopleIcon />}
        />
      </BottomNavigation>
    </Paper>
  )
})
