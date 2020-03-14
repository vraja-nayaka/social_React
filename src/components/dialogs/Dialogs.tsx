import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { Omit } from '@material-ui/types';

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: 20
  }
}));

type DialogProps = {
  id: number
  name: string
}

const Dialog: React.FC<DialogProps> = ({ id, name }) => {

  const pathLink = React.forwardRef<any, Omit<NavLinkProps, 'to'>>((props, ref?: React.Ref<HTMLAnchorElement>) => (
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

type DialogsPropsType = {
  dialogs: Array<DialogProps>
}

const Dialogs: React.FC<DialogsPropsType> = ({ dialogs }) => {
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
