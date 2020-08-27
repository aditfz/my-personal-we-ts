import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Modal } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  divImageModal: {
    width: '100%',
    height: '100%',
  },
  modal: {
    width: '60%',
    height: '70%',
    marginRight: 'auto',
    marginLeft: 'auto',

    marginTop: 60,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '30%',
      margin: 0,
      marginTop: 200,
    },
  },
  root: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    '& a': {
      textDecoration: 'none',
      color: '#fff',
      transition: '.4s',

      '&:hover': {
        color: theme.palette.primary.main,
        transition: '.4s',
      },
    },
  },
  divImage: {
    width: 300,
    height: 100,
    cursor: 'pointer',
    '&:hover': {
      transform: 'rotate(360deg)',
      transition: '1s',
    },
  },
}));
interface portfolioProps{
    color:string,
    title:string,
    desc:string
}
 const Portfolio:React.FC<portfolioProps>=(props) =>{
   const { color, title, desc }=props
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Grid item lg={4} className={classes.root}>
        <div
          onClick={() => setOpen(true)}
          className={classes.divImage}
          style={{ backgroundColor: color }}
        />
        <Typography variant='h5' className={classes.title}>
          <a href='https://tf-react-chester.now.sh/contact'>{title}</a>
        </Typography>
        <Typography variant='body1'>{desc}</Typography>
      </Grid>
      <Modal
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Grid
          alignItems='center'
          justify='center'
          className={classes.divImageModal}
          style={{ backgroundColor: color }}
        />
      </Modal>
    </>
  );
}
export default Portfolio