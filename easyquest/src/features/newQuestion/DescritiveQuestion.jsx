import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import RichTextField from '../../shared/components/RichTextField';
import { questionType } from '../../shared/Constants';
import textConstants from '../../shared/translations/textConstants';

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
  const style = useStyles();
  const { t } = useTranslation('common');
  const [description, setDescription] = useState(question?.description ?? '');
  const [modified, setModified] = useState(question?.modified);
  const [id] = useState(question?.id ?? uuid());
  const [feedback, setFeedback] = useState(question?.feedback ?? '');
  const [showFeedback, setShowFeedback] = useState(!!question?.feedback);
  useEffect(() => {
    setQuestion({
      ...question,
      id,
      description,
      feedback,
      type: questionType.descritive.constant,
      modified,
    });
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
        <Typography className={style.label}>
          {t(textConstants.labels.questionDescription)}
        </Typography>
        <RichTextField value={description} setValue={handleDescription} className={style.input} />
      </Grid>
      <br />
      <Grid className={style.row} style={{ paddingLeft: '335px' }}>
        {!showFeedback && (
          <Button variant="contained" onClick={() => setShowFeedback(true)}>
            <Add className="button-icon" />
            {t(textConstants.labels.addFeedback)}
          </Button>
        )}
      </Grid>
      {showFeedback && (
        <Grid className={style.row}>
          <Typography className={style.label}>
            {t(textConstants.labels.questionFeedback)}{' '}
          </Typography>
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
                {t(textConstants.labels.removeFeedback)}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
