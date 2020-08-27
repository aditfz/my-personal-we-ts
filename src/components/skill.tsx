import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  progressDiv: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  progress: {
    backgroundColor: '#2e344e',
    width: '80%',
    marginLeft: 15,
  },
}));
interface skillProps{
    skill:string,value:number
}
 const Skill:React.FC <skillProps>=(props)=> {
     const { skill, value }=props
  const [val, setVal] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (val === value) {
        return;
      }
      setVal(val + 5);
    }, 50);
  }, [val, value]);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h6'>{skill}</Typography>
      <div className={classes.progressDiv}>
        <Typography variant='body1'>{value}%</Typography>
        <LinearProgress
          className={classes.progress}
          variant='determinate'
          value={val}
        />
      </div>
    </div>
  );
}
export default Skill