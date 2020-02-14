import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    background: theme.palette.primary.mainGradient
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
    "& a": {
      textDecoration: "none",
      color: "white"
    }
  }
}));

export default function Header({ isAuth, login, logout, toggleTheme }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const loginingOut = () => {
    setAnchorEl(null);
    logout();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>
            <NavLink to={"/"}>SamuraiJS</NavLink>
          </Typography>
          {isAuth && (
            <div>
              <IconButton
                aria-label="toggle theme color"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleTheme}
                color="inherit"
              >
                <Brightness4Icon />
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  component={NavLink}
                  to="/profile"
                  onClick={handleClose}
                >
                  Profile
                </MenuItem>
                <MenuItem component={NavLink} to="/" onClick={loginingOut}>
                  Logout
                </MenuItem>
              </Menu>
              {login}
            </div>
          )}

          {!isAuth && (
            <Button
              variant="outlined"
              color="inherit"
              component={NavLink}
              to="/login"
            >
              login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
