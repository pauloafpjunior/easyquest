import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
import { Add, Remove, Check } from '@material-ui/icons';
import RichTextField from '../../shared/components/RichTextField';
import { questionType } from '../../shared/Contants';
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
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');
  const style = useStyles();
  useEffect(() => {
    const items = question?.items ?? [{ isTrue: false, text: '', id: '01' }];
    if (!question) {
      setQuestion(question ? { ...question, id: uuid(), items } : { id: uuid() });
    } else if (question?.type !== questionType.trueFalse) {
      setQuestion({ ...question, type: questionType.trueFalse, items });
    }
  }, [question, setQuestion]);

  const handleFeedback = (newFeedback) => {
    setFeedback(newFeedback);
    setQuestion({ ...question, feedback: newFeedback });
  };

  const handleItem = (newValue, index) => {
    const { items } = question;
    items[index].text = newValue;
    setQuestion({ ...question, items });
  };

  const addItem = () => {
    const { items } = question;
    items.push({ isTrue: false, text: '', id: (items.length + 1).toString() });
    setQuestion({ ...question, items });
  };

  const isTrue = (index) => (question?.items[index].isTrue ? style.correct : style.incorrect);

  const markAsCorrect = (index) => {
    const { items } = question;
    items[index].isTrue = !items[index].isTrue;
    setQuestion({ ...question, items });
  };

  const remove = (index) => {
    const { items } = question;
    items.splice(index, 1);
    setQuestion({ ...question, items });
  };

  return (
    <Grid className={style.container}>
      {question?.items &&
        question.items.map((item, index) => (
          <Grid className={style.row} key={item.id}>
            <Typography style={{ fontWeight: 'bold' }}>{`Item ${index + 1}:`}</Typography>
            <RichTextField
              value={item.value}
              setValue={(value) => handleItem(value, index)}
              className={style.input}
            />
            <Grid className={style.row} style={{ display: 'flex' }}>
              <Remove className={`button-icon ${style.removeIcon}`} onClick={() => remove(index)} />
              <Typography style={{ lineHeight: '30px' }}>Verdadeiro: </Typography>
              <Check
                className={`button-icon ${isTrue(index)}`}
                onClick={() => markAsCorrect(index)}
              />
            </Grid>
            <br />
          </Grid>
        ))}
      <Grid className={style.row}>
        <Button style={{ marginRight: '8px' }} variant="contained" onClick={addItem}>
          <Add className="button-icon" />
          Adicionar item
        </Button>
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
