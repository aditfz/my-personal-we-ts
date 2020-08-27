import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import Title from '../components/title';
import { getTranslate } from '../localization/index';
// import mainImage from '../assets/images/OZCT1772.JPG';
import Service from '../components/service';
import PaletteIcon from '@material-ui/icons/Palette';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CodeIcon from '@material-ui/icons/Code';
const mainImage= require('../assets/images/OZCT1772.JPG')
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    marginTop: 30,
  },
  iconStyle: {
    fontSize: 46,
    color: theme.palette.primary.main,
  },
  gridText: {
    paddingLeft: 20,
    paddingRight: 20,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      marginTop: 10,
    },
    marginTop: 30,
  },
  nameText: {
    color: theme.palette.primary.main,
    // [theme.breakpoints.down('xs')]: { display: 'block' },
  },
  aboutGrid: {
    paddingTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 60,
    [theme.breakpoints.down('xs')]: {
      marginTop: 20,
      padding: 15,
    },
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  imageGrid: {
    marginTop: 10,
    position: 'relative',
    '&::after': {
      width: 15,
      background: 'rgba(3,127,255,.6)',
      content: "''",
      position: 'absolute',
      left: 'auto',
      top: 'auto',
      bottom: 0,
      right: 0,
      height: '65%',
    },
    '&::before': {
      content: "''",
      position: 'absolute',
      left: 0,
      top: 0,
      height: ' 65%',
      width: 15,
      background: 'rgba(3,127,255,.6)',
    },
  },
}));
export default function AboutScreen() {
  const translate = getTranslate();
  const classes = useStyles();
  return (
    <Grid container alignItems='flex-start' className={classes.root}>
      <Grid container item xs={12} className={classes.aboutGrid}>
        <Title title={translate.aboutme} />
        <Grid container direction='row'>
          <Grid item xs={12} md={6} className={classes.imageGrid}>
            <img
              src={mainImage}
              alt={translate.name}
              className={classes.mainImage}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.gridText}>
            <Typography variant='h3' style={{ display: 'block' }}>
              {translate.hi1}{' '}
              <span className={classes.nameText}>{translate.name}</span>{' '}
              {translate.hi2}
            </Typography>
            <Typography variant='body1'>{translate.desc1}</Typography>
            <Typography variant='body1' style={{ marginTop: 10 }}>
              <b style={{ width: 120, display: 'inline-block' }}>
                {translate.fullname}
              </b>
              {': '}
              {translate.name}
            </Typography>
            <Typography variant='body1' style={{ marginTop: 5 }}>
              <b style={{ width: 120, display: 'inline-block' }}>
                {translate.age}
              </b>
              {': '}
              {translate.ag}
            </Typography>
            <Typography variant='body1' style={{ marginTop: 5 }}>
              <b style={{ width: 120, display: 'inline-block' }}>
                {translate.nationality}
              </b>
              {': '}
              {translate.iranian}
            </Typography>
            <Typography variant='body1' style={{ marginTop: 5 }}>
              <b style={{ width: 120, display: 'inline-block' }}>
                {translate.languages}
              </b>
              {':'}
              {translate.EP}
            </Typography>

            <div>
              <Button
                style={{ display: 'flex', marginTop: 40 }}
                variant='contained'
                color='primary'
              >
                {translate.downloadcv}
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} className={classes.aboutGrid}>
        <Title title={translate.services} />
        <Grid container direction='row'>
          <Service
            Icone={<PaletteIcon className={classes.iconStyle} />}
            titleText={translate.webdesign}
            descS={translate.desc}
          />
          <Service
            Icone={<PhoneAndroidIcon className={classes.iconStyle} />}
            descS={translate.desc}
            titleText={translate.webdevelopment}
          />
          <Service
            Icone={<CodeIcon className={classes.iconStyle} />}
            descS={translate.desc}
            titleText={translate.mobileapplication}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
