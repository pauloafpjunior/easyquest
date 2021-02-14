import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { WHITE } from '../../theme';

const useStyles = makeStyles({
  divider: {
    width: '4px',
    height: '90%',
    backgroundColor: WHITE,
    margin: '0 8px',
  },
});

export default () => {
  const style = useStyles();

  return <Grid className={style.divider} />;
};
