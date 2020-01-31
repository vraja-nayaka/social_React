import React from 'react'
import preloader from './../../../asets/images/preloader.svg';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function Preloader() {
    const classes = useStyles();
return <Backdrop className={classes.backdrop} open={true}>
        <img alt='...loading' src={preloader} />
      </Backdrop>
      
}