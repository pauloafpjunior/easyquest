import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Book, Edit, FileCopy, Delete, Message, Autorenew } from '@material-ui/icons';
import { questionType } from '../../shared/Contants';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '10px 0px 10px 0px',
  },
  description: {
    marginRight: 'auto',
    fontSize: '22px',
  },
  typeIcon: {
    height: '22px',
    width: '22px',
    margin: '0px 8px',
  },
  actionIcon: {
    height: '22px',
    width: '22px',
    margin: '0px 4px',
    cursor: 'pointer',
  },
});

export default ({ question }) => {
  const style = useStyles();
  const getIcon = () => {
    switch (question.type) {
      case questionType.multiple:
        return <Message className={style.typeIcon} />;
      case questionType.trueFalse:
        return <Autorenew className={style.typeIcon} />;
      case questionType.descritive:
      default:
        return <Book className={style.typeIcon} />;
    }
  };
  return (
    <Grid className={style.container}>
      {getIcon()}
      <Typography noWrap className={style.description}>
        {question.description.replace(/(<([^>]+)>)/gi, '')}
      </Typography>
      <Edit className={style.actionIcon} />
      <FileCopy className={style.actionIcon} />
      <Delete className={style.actionIcon} />
    </Grid>
  );
};
