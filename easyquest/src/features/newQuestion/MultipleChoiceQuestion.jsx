import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
import { Add, Remove, Check } from '@material-ui/icons';
import RichTextField from '../../shared/components/RichTextField';
import { MAX_ALTERNATIVES, questionType } from '../../shared/Constants';
import { NumberToLetter } from '../../shared/utils/Utils';

const useStyles = makeStyles({
  input: {
    width: '500px',
  },
  row: {
    width: 'max-content',
  },
  removeIcon: {
    marginTop: '4px',
    marginRight: '8px',
    color: 'red',
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
  const [id] = useState(question?.id ?? uuid());
  const [description, setDescription] = useState(question?.description ?? '');
  const [alternatives, setAlternatives] = useState(
    question?.alternatives ?? [
      { isCorrect: false, text: '', id: '01' },
      { isCorrect: false, text: '', id: '02' },
      { isCorrect: false, text: '', id: '03' },
      { isCorrect: false, text: '', id: '04' },
    ]
  );
  const [feedback, setFeedback] = useState(question?.feedback ?? '');
  const [showFeedback, setShowFeedback] = useState(!!question?.feedback);
  const style = useStyles();
  useEffect(() => {
    setQuestion({ id, description, alternatives, feedback, type: questionType.multiple });
  }, [id, description, alternatives, feedback]);

  const handleAlternative = (newValue, index) => {
    const alternative = alternatives[index];
    if (alternative) {
      alternative.text = newValue;
    }
    setAlternatives([...alternatives]);
  };

  const addAlternative = () => {
    alternatives.push({
      isCorrect: false,
      text: '',
      id: (alternatives.length + 1).toString(),
    });
    setAlternatives([...alternatives]);
  };

  const isCorrect = (index) => (alternatives[index].isCorrect ? style.correct : style.incorrect);

  const markAsCorrect = (index) => {
    const newVal = !alternatives[index].isCorrect;
    const newAlternatives = alternatives.map((alternative) => ({
      ...alternative,
      isCorrect: false,
    }));
    newAlternatives[index].isCorrect = newVal;
    setAlternatives([...newAlternatives]);
  };

  const remove = (index) => {
    alternatives.splice(index, 1);
    setAlternatives([...alternatives]);
  };

  return (
    <Grid className={style.container}>
      <Grid className={style.row}>
        <Typography style={{ fontWeight: 'bold' }}>Enunciado: </Typography>
        <RichTextField value={description} setValue={setDescription} className={style.input} />
      </Grid>
      <br />
      {alternatives &&
        alternatives.map((alternative, index) => (
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
              <Button onClick={() => remove(index)}>
                <Remove className={`button-icon ${style.removeIcon}`} />
                REMOVER
              </Button>
              <Button onClick={() => markAsCorrect(index)}>
                <Check
                  style={{ marginRight: '8px' }}
                  className={`button-icon ${isCorrect(index)}`}
                />
                Marcar como correta
              </Button>
            </Grid>
            <br />
          </Grid>
        ))}
      <Grid className={style.row}>
        {alternatives?.length < MAX_ALTERNATIVES && (
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
          <RichTextField value={feedback} setValue={setFeedback} className={style.input} />
          <Grid className={style.row} style={{ display: 'flex' }}>
            <Button
              onClick={() => {
                setShowFeedback(false);
                setFeedback('');
              }}
            >
              <Remove className={`button-icon ${style.removeIcon}`} />
              Remover
            </Button>
          </Grid>
          <br />
        </Grid>
      )}
    </Grid>
  );
};
