import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Title from '../components/title';
import { getTranslate } from '../localization/index';
import Portfolio from '../components/portfolio';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    padding: 30,
    paddingTop: 60,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 10,
      paddingRight: 10,
    },
    width: '100%',
  },
}));

export default function PortfoliosScreen() {
  const portfolios = [
    { id: 1, title: 'Personal-Web', desc: '', color: '#f00' },
    { id: 2, title: 'react ', desc: 'web developer', color: '#0f0' },
    { id: 3, title: 'react', desc: 'web developer', color: '#00f' },
    { id: 4, title: 'react js', desc: 'web developer', color: '#ff0' },
    { id: 5, title: 'react js', desc: 'web developer', color: '#f0f' },
    { id: 6, title: 'react js', desc: 'web developer', color: '#0ff' },
  ];
  const classes = useStyles();
  const translate = getTranslate();
  return (
    <div className={classes.root}>
      <Title title={translate.portfolios} />
      <Grid
        xs={12}
        container
        direction='row'
        justify='flex-start'
        alignItems='center'
      >
        {portfolios.map((portfolio) => (
          <Portfolio
            color={portfolio.color}
            key={portfolio.id}
            title={portfolio.title}
            desc={portfolio.desc}
          />
        ))}
      </Grid>
    </div>
  );
}
