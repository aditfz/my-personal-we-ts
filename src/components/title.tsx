import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 20,
    position: 'relative',
    height: 75,
    width: '100%',
    textAlign: 'left',
  },
  title: {
    '&::after': {
      width: 35,
      background: '#037fff',
      content: "''",
      position: 'absolute',
      left: 0,
      top: 'auto',
      bottom: 0,
      height: 5,
      borderRadius: 100,
    },
    '&::before': {
      content: "''",
      position: 'absolute',
      left: 0,
      top: 'auto',
      bottom: 0,
      height: 5,
      borderRadius: 100,

      width: 100,
      background: 'rgba(3,127,255,.3)',
    },
  },
  subtitle: {
    fontSize: '4.5rem',

    position: 'absolute',
    left: 15,
    top: '100%',
    lineHeight: 1,
    fontWeight: 900,
    color: 'rgba(25,29,43,.55)',
    display: 'inline-block',
    textTransform: 'uppercase',
    zIndex: -1,
    transform: 'translateY(-40%)',
  },
}));
interface titleProps{
    title:string
}
 const Title:React.FC <titleProps> =(props)=> {
     const {title}=props
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h2'>
        {title}
      </Typography>
      <span className={classes.subtitle}>{title}</span>
    </div>
  );
}
export default Title