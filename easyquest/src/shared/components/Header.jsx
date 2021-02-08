import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { BONDI_BLUE, COD_GRAY } from '../../theme';

const useStyles = makeStyles({
  header: {
    width: '100%',
    height: '80px',
    backgroundColor: BONDI_BLUE,
    border: `5px solid ${COD_GRAY}`,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 10px',
  },
  title: {
    marginRight: 'auto',
  },
});

export default ({ children }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.header}>
      <Typography variant="h1" className={classes.title}>
        EasyQuest
      </Typography>
      {children}
    </Grid>
  );
};
