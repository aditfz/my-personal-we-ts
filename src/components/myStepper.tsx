import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import { StepConnector, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  emptyDiv: {
    display: 'flex',
    flexDirection: 'row',
  },
  subtitleStep: {
    textAlign: 'left',
    marginBottom: 15,
  },
  stepper: {
    backgroundColor: 'transparent',
    paddingLeft: 0,
    paddingRight: 0,
  },
  title: {
    color: theme.palette.primary.main,
  },
  date: {
    width: 170,
    textAlign: 'left',
  },
  line: {
    width: 30,
    height: 1,
    backgroundColor: '#2e344e',
    marginRight: 15,
  },
  stepConnector: {
    '& span': {
      marginBottom: 0,
      marginTop: 0,
      paddingBottom: 0,
      paddingTop: 0,
      borderLeft: '3px solid #2e344e',
    },
    marginBottom: 0,
    marginTop: 0,
    paddingBottom: 0,
    paddingTop: -2,
  },

  iconCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    border: '5px solid #2e344e',
    marginLeft: 6.9,
    marginBottom: 0,
    marginTop: 0,
  },
  stepContent: {
    borderLeft: '3px solid #2e344e',
    marginBottom: 0,
    marginTop: 0,
    paddingLeft: 32,

    display: 'flex',
    [theme.breakpoints.down('xs')]: { paddingLeft: 15 },
  },
  muiLabel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
  },
}));
interface stepperProps{
    steps:any
}
 const VerticalLinearStepper:React.FC<stepperProps>=(props)=> {
     const {steps}=props
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper
        connector={<StepConnector className={classes.stepConnector} />}
        className={classes.stepper}
        orientation='vertical'
      >
        {steps.map((step: { id: number ; date: React.ReactNode; title: React.ReactNode; subtitle: React.ReactNode; content: React.ReactNode; }) =>
          step.id >= 0 ? (
            <Step active={true} key={step.id}>
              <StepLabel
                classes={{
                  label: classes.muiLabel,
                }}
                icon={<span className={classes.iconCircle} />}
              >
                <Typography className={classes.date} variant='h6'>
                  {step.date}
                </Typography>
                <Hidden xsDown>
                  {' '}
                  {<span className={classes.line}></span>}
                </Hidden>
                <Typography className={classes.title} variant='h5'>
                  {step.title}
                </Typography>
              </StepLabel>
              <StepContent className={classes.stepContent}>
                <div className={classes.emptyDiv}>
                  <Hidden xsDown>
                    {' '}
                    <div style={{ width: 200 }}></div>
                  </Hidden>
                  <div>
                    <Typography className={classes.subtitleStep} variant='h6'>
                      {step.subtitle}
                    </Typography>
                    <Typography variant='body1'>{step.content}</Typography>
                  </div>
                </div>
              </StepContent>
            </Step>
          ) : step.id === -1 ? (
            <Step active={true} key={step.id}>
              <StepLabel icon={null}></StepLabel>
            </Step>
          ) : null
        )}
      </Stepper>
    </div>
  );
}
export default VerticalLinearStepper