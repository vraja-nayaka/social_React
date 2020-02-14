import React from "react";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: 20
  }
}));

const Dialog = ({ id, name }) => {
  const pathLink = React.forwardRef((props, ref) => (
    <NavLink innerRef={ref} to={"/dialogs/" + id} {...props} />
  ));
  return (
    <div>
      <ListItem button component={pathLink}>
        <ListItemAvatar>
          <Avatar alt="Profile Picture" src={""} />
        </ListItemAvatar>
        <ListItemText primary={name} secondary="Написать сообщение" />
      </ListItem>
    </div>
  );
};

const Dialogs = ({ dialogs }) => {
  const classes = useStyles();

  const DialogsElements = dialogs.map(({ id, name }) => (
    <Dialog id={id} name={name} key={id} />
  ));

  return (
    <div className={classes.root}>
      <Paper square >
        {DialogsElements}
      </Paper>
    </div>
  );
};

export default Dialogs;
