import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Book, Edit, FileCopy, Delete } from '@material-ui/icons';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
  },
  description: {
    marginRight: 'auto',
    fontSize: '25px',
  },
  typeIcon: {
    height: '35px',
    width: '35px',
    margin: '0px 8px',
  },
  actionIcon: {
    height: '25px',
    width: '25px',
    margin: '0px 4px',
    cursor: 'pointer',
  },
});

export default ({ question }) => {
  const style = useStyles();
  return (
    <Grid className={style.container}>
      <Book className={style.typeIcon} />
      <Typography noWrap className={style.description}>
        {question.description}
      </Typography>
      <Edit className={style.actionIcon} />
      <FileCopy className={style.actionIcon} />
      <Delete className={style.actionIcon} />
    </Grid>
  );
};
