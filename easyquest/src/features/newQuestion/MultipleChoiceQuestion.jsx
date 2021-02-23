import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
import { Add, Remove, Check } from '@material-ui/icons';
import RichTextField from '../../shared/components/RichTextField';
import { MAX_ALTERNATIVES, questionType } from '../../shared/Contants';
import { NumberToLetter } from '../../shared/utils/Utils';

const useStyles = makeStyles({
  input: {
    width: '500px',
  },
  row: {
    width: 'max-content',
  },
  removeIcon: {
    color: 'red',
    marginRight: '16px',
    cursor: 'pointer',
  },
  correct: {
    color: 'green',
    cursor: 'pointer',
  },
  incorrect: {
    color: 'gray',
    cursor: 'pointer',
  },
  container: {
    width: '100%',
    padding: '32px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default ({ question, setQuestion }) => {
  const [description, setDescription] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');
  const style = useStyles();
  useEffect(() => {
    const alternatives = question?.alternatives ?? [{ isCorrect: false, text: '', id: '01' }];
    if (!question) {
      setQuestion(question ? { ...question, id: uuid(), alternatives } : { id: uuid() });
    } else if (question?.type !== questionType.multiple) {
      setQuestion({ ...question, type: questionType.multiple, alternatives });
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

  const handleAlternative = (newValue, index) => {
    const { alternatives } = question;
    alternatives[index].text = newValue;
    setQuestion({ ...question, alternatives });
  };

  const addAlternative = () => {
    const { alternatives } = question;
    alternatives.push({ isCorrect: false, text: '', id: (alternatives.length + 1).toString() });
    setQuestion({ ...question, alternatives });
  };

  const isCorrect = (index) =>
    question?.alternatives[index].isCorrect ? style.correct : style.incorrect;

  const markAsCorrect = (index) => {
    const newVal = !question.alternatives[index].isCorrect;
    const alternatives = question?.alternatives.map((alternative) => ({
      ...alternative,
      isCorrect: false,
    }));
    alternatives[index].isCorrect = newVal;
    setQuestion({ ...question, alternatives });
  };

  const remove = (index) => {
    const { alternatives } = question;
    alternatives.splice(index, 1);
    setQuestion({ ...question, alternatives });
  };

  return (
    <Grid className={style.container}>
      <Grid className={style.row}>
        <Typography style={{ fontWeight: 'bold' }}>Enunciado: </Typography>
        <RichTextField value={description} setValue={handleDescription} className={style.input} />
      </Grid>
      <br />
      {question?.alternatives &&
        question.alternatives.map((alternative, index) => (
          <Grid className={style.row} key={alternative.id}>
            <Typography style={{ fontWeight: 'bold' }}>{`Alternativa ${NumberToLetter(
              index
            )}:`}</Typography>
            <RichTextField
              value={alternative.value}
              setValue={(value) => handleAlternative(value, index)}
              className={style.input}
            />
            <Grid className={style.row} style={{ display: 'flex' }}>
              <Remove className={`button-icon ${style.removeIcon}`} onClick={() => remove(index)} />
              <Typography style={{ lineHeight: '30px' }}>Alternatica correta: </Typography>
              <Check
                className={`button-icon ${isCorrect(index)}`}
                onClick={() => markAsCorrect(index)}
              />
            </Grid>
            <br />
          </Grid>
        ))}
      <Grid className={style.row}>
        {question?.alternatives?.length < MAX_ALTERNATIVES && (
          <Button style={{ marginRight: '8px' }} variant="contained" onClick={addAlternative}>
            <Add className="button-icon" />
            Adicionar alternativa
          </Button>
        )}
        {!showFeedback && (
          <Button variant="contained" onClick={() => setShowFeedback(true)}>
            <Add className="button-icon" />
            Adicionar feedback
          </Button>
        )}
        <br />
      </Grid>
      {showFeedback && (
        <Grid className={style.row}>
          <Typography style={{ fontWeight: 'bold' }}>Feedback: </Typography>
          <RichTextField value={feedback} setValue={handleFeedback} className={style.input} />
        </Grid>
      )}
    </Grid>
  );
};
