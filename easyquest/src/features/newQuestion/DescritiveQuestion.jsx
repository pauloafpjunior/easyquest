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
  row: { display: 'flex', marginBottom: '16px' },
  removeIcon: {
    marginTop: '4px',
    marginRight: '8px',
    color: 'red',
    cursor: 'pointer',
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
        <Typography className={style.label}>Enunciado: </Typography>
        <RichTextField value={description} setValue={handleDescription} className={style.input} />
      </Grid>
      <br />
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
        </Grid>
      )}
    </Grid>
  );
};
