import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    papper: {
        height: 340
      },
        text: {
      padding: theme.spacing(2, 2, 0)
    }
  }))

const WellcomePage = () => {
    const classes = useStyles()
    return (
        <div>
            <Paper className={classes.papper} elevation={3}>
                <Typography variant="h5" className={classes.text} gutterBottom>
                    Приветствуем Вас в "SamuraiJS"!
                </Typography>
                <Typography variant="body1" className={classes.text} gutterBottom>
                    Здесь вы можете найти ReactJS-разработчиков, ищущих трудоустройство.
                </Typography>
            </Paper>
        </div>
    )
}

export default WellcomePage
