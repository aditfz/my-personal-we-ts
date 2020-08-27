import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Title from '../components/title';
import { getTranslate } from '../localization/index';
import Skill from '../components/skill';
import MyStepper from '../components/myStepper';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  icons: {
    fontSize: '34',
  },

  titles: { marginLeft: 10 },
  gridContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  gridText: {
    paddingLeft: 20,
    paddingRight: 20,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      marginTop: 10,
      marginBottom: 10,
    },
    marginTop: 30,
  },

  skillGrid: {
    paddingTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 60,
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 0,
      paddingLeft: 5,
      paddingRight: 5,
    },
  },
}));
export default function ResumeScreen() {
  const translate = getTranslate();
  const classes = useStyles();

  return (
    <Grid container alignItems='flex-start' className={classes.root}>
      <Grid container item xs={12} className={classes.skillGrid}>
        <Title title={translate.myskills} />
        <Grid container direction='row'>
          <Grid item xs={12} md={6}>
            <Skill skill='HTML' value={80} />
            <Skill skill='CSS' value={50} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Skill skill='React JS' value={60} />
            <Skill skill='JavaScript' value={40} />
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} className={classes.skillGrid}>
        <Title title={translate.resume} />
        <Grid
          container
          alignContent='center'
          justify='flex-start'
          direction='row'
        >
          <BusinessCenterIcon className={classes.icons} />
          <Typography variant='h4' className={classes.titles}>
            {translate.businessexperience}{' '}
          </Typography>
        </Grid>
        <Grid container className={classes.gridContainer}>
          <MyStepper steps={translate.work} />
        </Grid>
        <Grid
          container
          alignContent='center'
          justify='flex-start'
          direction='row'
        >
          <LocalLibraryIcon className={classes.icons} />
          <Typography variant='h4' className={classes.titles}>
            {translate.educationalqualification}{' '}
          </Typography>
        </Grid>
        <Grid container className={classes.gridContainer}>
          <MyStepper steps={translate.education} />
        </Grid>
      </Grid>
    </Grid>
  );
}
