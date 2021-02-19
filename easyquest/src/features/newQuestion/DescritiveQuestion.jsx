import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import RichTextField from '../../shared/components/RichTextField';
import { questionType } from '../../shared/Contants';

const useStyles = makeStyles({
  input: {
    width: '500px',
  },
  container: {
    width: '100%',
    padding: '32px',
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
      <Typography>Enunciado: </Typography>
      <RichTextField value={description} setValue={handleDescription} className={style.input} />
      <br />
      <Typography>Feedback: </Typography>
      <RichTextField value={feedback} setValue={handleFeedback} className={style.input} />
    </Grid>
  );
};
