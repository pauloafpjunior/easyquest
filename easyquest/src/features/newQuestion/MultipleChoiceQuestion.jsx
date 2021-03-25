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
  row: {},
  alternativeRow: {
    width: 'max-content',
    marginTop: '8px',
  },
  buttonRow: {
    width: 'max-content',
    marginTop: '8px',
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
  selectdAlternative: {
    border: '1px solid green',
    color: 'green',
  },
});

export default ({ question, setQuestion }) => {
  const [id] = useState(question?.id ?? uuid());
  const [modified, setModified] = useState(false);
  const [description, setDescription] = useState(question?.description ?? '');
  const [alternatives, setAlternatives] = useState(
    question?.alternatives ?? [
      { isCorrect: false, text: '', id: uuid() },
      { isCorrect: false, text: '', id: uuid() },
      { isCorrect: false, text: '', id: uuid() },
      { isCorrect: false, text: '', id: uuid() },
    ]
  );
  const [feedback, setFeedback] = useState(question?.feedback ?? '');
  const [showFeedback, setShowFeedback] = useState(!!question?.feedback);
  const style = useStyles();
  useEffect(() => {
    setQuestion({ id, description, alternatives, feedback, type: questionType.multiple, modified });
  }, [id, description, alternatives, feedback, modified]);

  const handleAlternative = (newValue, index) => {
    alternatives[index].text = newValue;
    setAlternatives([...alternatives]);
    setModified(true);
  };

  const addAlternative = () => {
    alternatives.push({
      isCorrect: false,
      text: '',
      id: uuid(),
    });
    setAlternatives([...alternatives]);
    setModified(true);
  };

  const isCorrect = (index) => (alternatives[index].isCorrect ? style.correct : style.incorrect);

  const markAsCorrect = (index) => {
    const newVal = !alternatives[index].isCorrect;
    alternatives.forEach((alternative, i) => {
      alternative.isCorrect = i === index && newVal;
    });

    setAlternatives([...alternatives]);
    setModified(true);
  };

  const remove = (index) => {
    alternatives.splice(index, 1);
    setAlternatives([...alternatives]);
    setModified(true);
  };

  const handleDescription = (value) => {
    setDescription(value);
    setModified(true);
  };

  const handleFeedback = (value) => {
    setFeedback(value);
    setModified(true);
  };

  const getButtonClass = (index) => (alternatives[index].isCorrect ? style.selectdAlternative : '');

  return (
    <Grid className={style.container}>
      <Grid className={style.row}>
        <Typography style={{ fontWeight: 'bold' }}>Enunciado: </Typography>
        <RichTextField value={description} setValue={handleDescription} className={style.input} />
      </Grid>
      <br />
      {alternatives &&
        alternatives.map((alternative, index) => (
          <Grid className={style.alternativeRow} key={alternative.id}>
            <Typography style={{ fontWeight: 'bold' }}>{`Alternativa ${NumberToLetter(
              index
            )}:`}</Typography>
            <RichTextField
              value={alternative.text}
              setValue={(value) => handleAlternative(value, index)}
              className={style.input}
            />
            <Grid className={style.buttonRow} style={{ display: 'flex' }}>
              <Button onClick={() => remove(index)}>
                <Remove className={`button-icon ${style.removeIcon}`} />
                REMOVER
              </Button>
              <Button className={getButtonClass(index)} onClick={() => markAsCorrect(index)}>
                <Check
                  style={{ marginRight: '8px' }}
                  className={`button-icon ${isCorrect(index)}`}
                />
                Esta é a alternativa correta
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
          <RichTextField value={feedback} setValue={handleFeedback} className={style.input} />
          <Grid className={style.row} style={{ display: 'flex' }}>
            <Button
              onClick={() => {
                setShowFeedback(false);
                handleFeedback('');
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
