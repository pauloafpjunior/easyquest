import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
import { Add, Check, Remove, Close } from '@material-ui/icons';
import RichTextField from '../../shared/components/RichTextField';
import Language from '../../shared/Languages';

const useStyles = makeStyles({
  input: {
    width: '500px',
  },
  row: { display: 'flex', marginBottom: '16px' },
  btnRow: {
    width: 'max-content',
    marginTop: '8px',
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
  trueBtn: {
    color: 'green',
    border: '1px solid green',
  },
  falseBtn: {
    color: 'red',
    border: '1px solid red',
  },
  container: {
    width: '100%',
    paddingBottom: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  label: {
    width: '120px',
    fontWeight: 'bold',
  },
});

export default ({ question, setQuestion }) => {
  const [id] = useState(question?.id ?? uuid());
  const [modified, setModified] = useState(false);
  const [description, setDescription] = useState(question?.description ?? '');
  const [isCorrect, setIsCorrect] = useState(!!question.isCorrect);
  const [feedback, setFeedback] = useState(question?.feecback ?? '');
  const [showFeedback, setShowFeedback] = useState(!!question?.feecback);
  const style = useStyles();
  useEffect(() => {
    setQuestion({
      ...question,
      id,
      description,
      isCorrect,
      feedback,
      type: Language.questionType.trueFalse.constant,
      modified,
    });
  }, [description, setQuestion]);

  const handleDescription = (value) => {
    setDescription(value);
    setModified(true);
  };

  const handleFeedBack = (value) => {
    setFeedback(value);
    setModified(true);
  };

  const getButtonClass = () => (isCorrect ? style.trueBtn : style.falseBtn);

  return (
    <Grid className={style.container}>
      <Grid className={style.row}>
        <Typography className={style.label}>Enunciado:</Typography>
        <Grid>
          <RichTextField value={description} setValue={handleDescription} className={style.input} />
          <Grid className={style.btnRow} style={{ display: 'flex' }}>
            <Button className={getButtonClass()} onClick={() => setIsCorrect(!isCorrect)}>
              {isCorrect ? (
                <Check style={{ marginRight: '8px' }} className="button-icon" />
              ) : (
                <Close style={{ marginRight: '8px' }} className="button-icon" />
              )}
              {isCorrect ? 'Verdadeiro' : 'Falso'}
            </Button>
          </Grid>
        </Grid>
        <br />
      </Grid>
      <Grid className={style.row} style={{ paddingLeft: '335px' }}>
        {!showFeedback && (
          <Button variant="contained" onClick={() => setShowFeedback(true)}>
            <Add className="button-icon" />
            Adicionar feedback
          </Button>
        )}
      </Grid>
      {showFeedback && (
        <Grid className={style.row}>
          <Typography className={style.label}>Feedback: </Typography>
          <Grid>
            <RichTextField value={feedback} setValue={handleFeedBack} className={style.input} />
            <Grid className={style.btnRow} style={{ display: 'flex' }}>
              <Button
                onClick={() => {
                  setShowFeedback(false);
                  handleFeedBack('');
                }}
              >
                <Remove className={`button-icon ${style.removeIcon}`} />
                Remover
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
