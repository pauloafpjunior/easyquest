import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import RichTextField from '../../shared/components/RichTextField';
import { questionType } from '../../shared/Contants';

const useStyles = makeStyles({
  input: {
    width: '500px',
  },
  row: {
    width: 'max-content',
  },
  container: {
    width: '100%',
    paddingTop: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default ({ question, setQuestion }) => {
  const [description, setDescription] = useState('');
  const [feedback, setFeedback] = useState('');
  const style = useStyles();
  useEffect(() => {
    if (!question?.id) {
      setQuestion(question ? { ...question, id: uuid() } : { id: uuid() });
    } else if (question?.type !== questionType.descritive) {
      setQuestion({ ...question, type: questionType.descritive });
    }
  }, [question, setQuestion]);

  const handleDescription = (newDescription) => {
    setDescription(newDescription);
    setQuestion({ ...question, description: newDescription });
  };

  const handleFeedback = (newFeedback) => {
    setFeedback(newFeedback);
    setQuestion({ ...question, feedback: newFeedback });
  };

  return (
    <Grid className={style.container}>
      <Grid className={style.row}>
        <Typography style={{ fontWeight: 'bold' }}>Enunciado: </Typography>
        <RichTextField value={description} setValue={handleDescription} className={style.input} />
      </Grid>
      <br />
      <Grid className={style.row}>
        <Typography style={{ fontWeight: 'bold' }}>Feedback: </Typography>
        <RichTextField value={feedback} setValue={handleFeedback} className={style.input} />
      </Grid>
    </Grid>
  );
};
