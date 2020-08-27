import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: { width: '100%', marginTop: 10, display: 'flex' },
  des: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    [theme.breakpoints.down('xs')]: { marginTop: 10 },
  },
  main: {
    padding: 20,
    border: '1px solid #2e344e',
    borderTop: '5px solid #2e344e',
    backgroundColor: '#191d2b',
    transition: '0.4s',
    margin: 20,
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },

    '&:hover': {
      borderTopColor: theme.palette.primary.main,
      transition: '0.4s',
    },
  },
  iconDiv: {
    matgin: 10,
    marginRight: 25,
    border: '1px solid #2e344e',
    padding: 10,
    paddingBottom: 5,

    [theme.breakpoints.down('xs')]: {
      width: '30%',
    },
  },
  titleT: {
    textAlign: 'left',
  },
  desc1: {
    flex: 1,
    transition: '0.5s',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
      transition: '0.5s',
    },
  },
}));
interface contactProps{
    Icone:object,
    titleText:string,
    descS:string

}
 const Contact:React.FC <contactProps>=(props)=> {
     const { Icone, titleText, descS }=props
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.main}
        justify='flex-start'
        alignItems='center'
      >
        <div className={classes.iconDiv}>{Icone}</div>
        <div className={classes.des}>
          {' '}
          <Typography variant='h6' className={classes.titleT}>
            {titleText}
          </Typography>
          <Typography variant='body1' className={classes.desc1}>
            {descS}
          </Typography>
        </div>
      </Grid>
    </div>
  );
}
export default Contact