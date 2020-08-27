import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import Title from '../components/title';
import { getTranslate } from '../localization/index';
import CallIcon from '@material-ui/icons/Call';
import PinDropIcon from '@material-ui/icons/PinDrop';
import EmailIcon from '@material-ui/icons/Email';
import './contact.css';
import Contact from '../components/contact';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  icon: {
    fontSize: 40,
  },

  contactGrid: {
    paddingTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 60,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 5,
      paddingRight: 5,
    },
  },

  getintouch: {
    textAlign: 'left',
  },
  formGrid: { padding: 5 },
  details: { padding: 5 },
}));
export default function ContactScreen() {
  const translate = getTranslate();
  const classes = useStyles();
  return (
    <Grid container alignItems='flex-start' className={classes.root}>
      <Grid container item xs={12} className={classes.contactGrid}>
        <Title title={translate.contactme} />
        <Grid container>
          <Grid item xs={12} md={6} className={classes.formGrid}>
            <Typography className={classes.getintouch} variant='h4'>
              {translate.getintouch}
            </Typography>
            <TextField
              style={{ marginTop: 25 }}
              fullWidth
              size='medium'
              required
              id='outlined-required'
              label={translate.entername}
              variant='outlined'
            />
            <TextField
              style={{ marginTop: 25 }}
              fullWidth
              size='medium'
              required
              id='outlined-required'
              label={translate.enteremail}
              variant='outlined'
            />
            <TextField
              style={{ marginTop: 25 }}
              fullWidth
              size='medium'
              required
              id='outlined-required'
              label={translate.entersubject}
              variant='outlined'
            />
            <TextField
              style={{ marginTop: 25 }}
              fullWidth
              size='medium'
              required
              id='outlined-required'
              label={translate.entermessage}
              variant='outlined'
              multiline
              rows={5}
            />
            <Button
              style={{ display: 'flex', marginTop: 25 }}
              variant='contained'
              color='primary'
            >
              {translate.sendmessage}
            </Button>{' '}
          </Grid>
          <Grid item xs={12} md={6} className={classes.details}>
            <Contact
              Icone={<CallIcon className={classes.icon} />}
              titleText={translate.phone}
              descS={translate.phonenumber}
            />
            <Contact
              Icone={<EmailIcon className={classes.icon} />}
              titleText={translate.email}
              descS={translate.emailaddress}
            />
            <Contact
              
              Icone={<PinDropIcon className={classes.icon} />}
              titleText={translate.address}
              descS={translate.addresss}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
