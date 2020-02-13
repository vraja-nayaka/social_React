import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import AccountIcon from '@material-ui/icons/AccountCircleSharp'
import ChatIcon from '@material-ui/icons/Chat'
import PeopleIcon from '@material-ui/icons/People'
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: '0px',
    left: '0px',
    width: '100vw',
    zIndex: '1'
  },
  paper: {
    width: '100vw'
  }
})

export default withRouter(function Navbar({ location }) {
  const classes = useStyles()
  const matches = useMediaQuery('(min-width:600px)')
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
      case 'todo':
        return setValue(3)
      default:
        return setValue(null)
    }
  }

  useEffect(() => {
    updateNavigation(path)
  }, [path])

  return (
    <div className={!matches ? classes.root : undefined}>
      <Paper className={!matches ? classes.paper : undefined}>
        <BottomNavigation value={value} showLabels>
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
          <BottomNavigationAction
            label="Todo"
            component={NavLink}
            to={'/todo'}
            icon={<PlaylistAddCheckIcon />}
          />
        </BottomNavigation>
      </Paper>
    </div>
  )
})
