import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
import { Add, Remove, Check } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import RichTextField from '../../shared/components/RichTextField';
import { MAX_ALTERNATIVES, questionType } from '../../shared/Constants';
import { NumberToLetter } from '../../shared/utils/Utils';
import textConstants from '../../shared/translations/textConstants';

const useStyles = makeStyles({
  input: {
    width: '500px',
  },
  row: { display: 'flex', marginBottom: '16px' },
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
    paddingBottom: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  selectdAlternative: {
    border: '1px solid green',
    color: 'green',
  },
  label: {
    width: '120px',
    fontWeight: 'bold',
  },
});

export default ({ question, setQuestion }) => {
  const style = useStyles();
  const { t } = useTranslation('common');
  const [id] = useState(question?.id ?? uuid());
  const [modified, setModified] = useState(question?.modified);
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
  useEffect(() => {
    setQuestion({
      ...question,
      id,
      description,
      alternatives,
      feedback,
      type: questionType.multiple.constant,
      modified,
    });
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

  const getButtonsPadding = () => {
    if (alternatives.length < 5 && !showFeedback) return '230px';
    if (!showFeedback) return '335px';
    return '330px';
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
      {alternatives &&
        alternatives.map((alternative, index) => (
          <Grid className={style.row} key={alternative.id}>
            <Typography className={style.label}>{`${t(
              'labels.questionAlternative'
            )} ${NumberToLetter(index)}:`}</Typography>
            <Grid>
              <RichTextField
                value={alternative.text}
                setValue={(value) => handleAlternative(value, index)}
                className={style.input}
              />
              <Grid className={style.buttonRow} style={{ display: 'flex' }}>
                <Button onClick={() => remove(index)}>
                  <Remove className={`button-icon ${style.removeIcon}`} />
                  {t(textConstants.labels.removeAlternative)}
                </Button>
                <Button className={getButtonClass(index)} onClick={() => markAsCorrect(index)}>
                  <Check
                    style={{ marginRight: '8px' }}
                    className={`button-icon ${isCorrect(index)}`}
                  />
                  {alternative.isCorrect
                    ? t(textConstants.labels.correctAlternative)
                    : t(textConstants.labels.markCorrectAlternative)}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ))}
      <Grid className={style.row} style={{ paddingLeft: getButtonsPadding() }}>
        {alternatives?.length < MAX_ALTERNATIVES && (
          <Button style={{ marginRight: '8px' }} variant="contained" onClick={addAlternative}>
            <Add className="button-icon" />
            {t(textConstants.labels.addAlternative)}
          </Button>
        )}
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
            {t(textConstants.labels.questionFeedback)}
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
          <br />
        </Grid>
      )}
    </Grid>
  );
};
