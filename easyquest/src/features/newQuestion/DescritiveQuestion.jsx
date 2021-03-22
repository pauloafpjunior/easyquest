import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import RichTextField from '../../shared/components/RichTextField';
import { questionType } from '../../shared/Constants';

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
  container: {
    width: '100%',
    paddingTop: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default ({ question, setQuestion }) => {
  const [description, setDescription] = useState(question?.description ?? '');
  const [modified, setModified] = useState(false);
  const [id] = useState(question?.id ?? uuid());
  const [feedback, setFeedback] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const style = useStyles();
  useEffect(() => {
    setQuestion({ id, description, feedback, type: questionType.descritive, modified });
  }, [id, description, feedback, modified]);

  const handleDescription = (value) => {
    setDescription(value);
    setModified(true);
  };

  const handleFeedback = (value) => {
    setFeedback(value);
    setModified(true);
  };

  return (
    <Grid className={style.container}>
      <Grid className={style.row}>
        <Typography style={{ fontWeight: 'bold' }}>Enunciado: </Typography>
        <RichTextField value={description} setValue={handleDescription} className={style.input} />
      </Grid>
      <br />
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
        </Grid>
      )}
    </Grid>
  );
};
