import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { getTranslate } from '../localization/index';
import './home.css';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
  },
  nameText: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: { display: 'block' },
  },
  divIcons: {
    marginTop: 25,
    padding: 15,
  },
  iconStyles: {
    margin: 5,
    border: '2px solid #2e344e',
    width: 45,
    height: 45,
    transition: '0.5s',
    '&:hover': {
      transition: '1s',
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
    },
  },
}));

export default function HomeScreen() {
  const translate = getTranslate();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div id='title'></div>
      <Grid>
        <Typography variant='h1'>
          {translate.hi1}{' '}
          <span className={classes.nameText}>{translate.name}</span>
          {translate.hi2}
        </Typography>
        <Typography style={{ padding: 10 }} variant='subtitle1'>
          {translate.desc1}
        </Typography>{' '}
        <div className={classes.divIcons}>
          <IconButton
            aria-label='delete'
            color='secondary'
            className={classes.iconStyles}
          >
            <TelegramIcon />
          </IconButton>
          <IconButton
            aria-label='delete'
            color='secondary'
            className={classes.iconStyles}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            aria-label='delete'
            color='secondary'
            className={classes.iconStyles}
          >
            <WhatsAppIcon />
          </IconButton>
        </div>
      </Grid>
    </div>
  );
}
