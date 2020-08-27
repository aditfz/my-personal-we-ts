import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: { paddingRight: 15, paddingLeft: 15, marginTop: 10 },
  main: {
    padding: 20,
    border: '1px solid #2e344e',
    borderTop: '5px solid #2e344e',
    backgroundColor: '#191d2b',
    transition: '0.4s',

    '&:hover': {
      borderTopColor: theme.palette.primary.main,
      transition: '0.4s',
    },
  },
  titleT: {
    marginTop: 10,
    position: 'relative',
    paddingBottom: 10,
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 'auto',
      bottom: 0,
      height: 2,
      width: 50,
      background: '#2e344e',
    },
  },
  desc1: {},
}));
interface serviceProps{
    Icone: object,
    titleText:string,
    descS:string
}
 const Service:React.FC <serviceProps>=(props) =>{
     const { Icone, titleText, descS }=props
  const classes = useStyles();
  return (
    <Grid item lg={4} md={6} xs={12} className={classes.root}>
      <Grid container className={classes.main} direction='column'>
        {Icone}
        <Typography variant='h5' className={classes.titleT}>
          {titleText}
        </Typography>
        <Typography variant='body1' className={classes.desc1}>
          {descS}
        </Typography>
      </Grid>
    </Grid>
  );
}
export default Service