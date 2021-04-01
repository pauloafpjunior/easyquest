import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { BONDI_BLUE, COD_GRAY } from '../../theme';
import Language from '../Languages';

const useStyles = makeStyles({
  header: {
    position: 'relative',
    zIndex: '1002',
    width: '100%',
    height: '70px',
    backgroundColor: BONDI_BLUE,
    borderBottom: `3px solid ${COD_GRAY}`,
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
  const style = useStyles();
  return (
    <Grid className={style.header}>
      <Typography variant="h1" className={style.title}>
        {Language.appName}
      </Typography>
      {children}
    </Grid>
  );
};
