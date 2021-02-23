import React, { useState } from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { Save, Close } from '@material-ui/icons';
import Header from '../../shared/components/Header';
import { components, questionType } from '../../shared/Contants';
import HeaderDivider from '../../shared/components/HeaderDivider';
import DescritiveQuestion from './DescritiveQuestion';
import { validateQuestion } from '../../shared/utils/QuestionValidators';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';

const useStyles = makeStyles({
  container: {
    width: '100%',
  },
  input: {
    fontSize: '22px',
    padding: '5px 5px 5px 5px',
  },
  icon: {
    height: '30px',
    width: '30px',
  },
});

export default ({ setActive, addQuestion }) => {
  const style = useStyles();
  const [newQuestion, setNewQuestion] = useState(null);
  const [newQuestionType, setNewQuestionType] = useState(questionType.multiple);
  const close = () => setActive(components.questionList);
  const save = () => {
    if (!validateQuestion(newQuestion)) {
      alert('Questão inválida!');
      return;
    }
    addQuestion(newQuestion);
    close();
  };

  return (
    <Grid className={style.container}>
      <Header>
        <Button variant="outlined" onClick={save}>
          <Save className="button-icon" />
          SALVAR
        </Button>
        <HeaderDivider />
        <Button variant="outlined" onClick={close}>
          <Close className="button-icon" />
          FECHAR
        </Button>
      </Header>
      {newQuestionType === questionType.descritive && (
        <DescritiveQuestion question={newQuestion} setQuestion={setNewQuestion} />
      )}
      {newQuestionType === questionType.multiple && (
        <MultipleChoiceQuestion question={newQuestion} setQuestion={setNewQuestion} />
      )}
      {newQuestionType === questionType.trueFalse && (
        <DescritiveQuestion question={newQuestion} setQuestion={setNewQuestion} />
      )}
    </Grid>
  );
};
