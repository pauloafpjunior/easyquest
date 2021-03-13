import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
import { Add, Check, Remove } from '@material-ui/icons';
import RichTextField from '../../shared/components/RichTextField';
import { questionType } from '../../shared/Contants';

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
  const [id] = useState(question?.id ?? uuid());
  const [description, setDescription] = useState(question?.description ?? '');
  const [isCorrect, setIsCorrect] = useState(!!question.isCorrect);
  const [feedback, setFeedback] = useState(question?.feecback ?? '');
  const [showFeedback, setShowFeedback] = useState(!!question?.feecback);
  const style = useStyles();
  useEffect(() => {
    setQuestion({ id, description, isCorrect, feedback, type: questionType.trueFalse });
  }, [description, setQuestion]);

  return (
    <Grid className={style.container}>
      <Grid className={style.row}>
        <Typography style={{ fontWeight: 'bold' }}>Enunaciado:</Typography>
        <RichTextField value={description} setValue={setDescription} className={style.input} />
        <Grid className={style.row} style={{ display: 'flex' }}>
          <Typography style={{ lineHeight: '30px' }}>Verdadeiro: </Typography>
          <Check
            className={`button-icon ${isCorrect ? style.correct : style.incorrect}`}
            onClick={() => setIsCorrect(!isCorrect)}
          />
        </Grid>
        <br />
      </Grid>
      <Grid className={style.row}>
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
        </Grid>
      )}
    </Grid>
  );
};
