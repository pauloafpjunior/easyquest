import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Grid, makeStyles, Typography, Button, Input } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import RichTextField from '../../shared/components/RichTextField';
import { MAX_ITEMS, questionType } from '../../shared/Constants';
import { NumberToLetter } from '../../shared/utils/Utils';
import textConstants from '../../shared/translations/textConstants';

const useStyles = makeStyles({
  input: {
    width: '500px',
  },
  row: { display: 'flex', marginBottom: '8px' },
  answerRow: { display: 'flex', marginBottom: '8px' },
  buttonRow: {
    width: 'max-content',
    marginBottom: '24px',
    paddingLeft: '120px',
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
  const [items, setItems] = useState(
    question?.items ?? [
      { answer: '', text: '', id: uuid() },
      { answer: '', text: '', id: uuid() },
      { answer: '', text: '', id: uuid() },
      { answer: '', text: '', id: uuid() },
    ]
  );
  const [feedback, setFeedback] = useState(question?.feedback ?? '');
  const [showFeedback, setShowFeedback] = useState(!!question?.feedback);
  useEffect(() => {
    setQuestion({
      ...question,
      id,
      description,
      items,
      feedback,
      type: questionType.associative.constant,
      modified,
    });
  }, [id, description, items, feedback, modified]);

  const handleItem = (newValue, index) => {
    items[index].text = newValue;
    setItems([...items]);
    setModified(true);
  };

  const addItem = () => {
    items.push({
      answer: '',
      text: '',
      id: uuid(),
    });
    setItems([...items]);
    setModified(true);
  };

  const remove = (index) => {
    items.splice(index, 1);
    setItems([...items]);
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

  const getButtonsPadding = () => {
    if (items.length < 5 && !showFeedback) return '230px';
    if (!showFeedback) return '335px';
    return '330px';
  };

  const handleItemAnswer = (event, index) => {
    items[index].answer = event.target.value;
    setItems([...items]);
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
      {items &&
        items.map((item, index) => (
          <React.Fragment key={item.id}>
            <Grid className={style.row}>
              <Typography className={style.label}>{`${t(
                textConstants.labels.questionItem
              )} ${NumberToLetter(index)}:`}</Typography>
              <Grid>
                <RichTextField
                  value={item.text}
                  setValue={(value) => handleItem(value, index)}
                  className={style.input}
                />
              </Grid>
            </Grid>
            <Grid className={style.answerRow}>
              <Typography className={style.label}>{`${t(
                textConstants.labels.itemAnswer
              )}:`}</Typography>
              <Input
                style={{ width: '620px' }}
                value={item.answer}
                onChange={(event) => handleItemAnswer(event, index)}
              />
            </Grid>
            <Grid className={style.buttonRow} style={{ display: 'flex' }}>
              <Button onClick={() => remove(index)}>
                <Remove className={`button-icon ${style.removeIcon}`} />
                {t(textConstants.labels.removeItem)}
              </Button>
            </Grid>
          </React.Fragment>
        ))}
      <Grid className={style.row} style={{ paddingLeft: getButtonsPadding() }}>
        {items?.length < MAX_ITEMS && (
          <Button style={{ marginRight: '8px' }} variant="contained" onClick={addItem}>
            <Add className="button-icon" />
            {t(textConstants.labels.addItem)}
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
