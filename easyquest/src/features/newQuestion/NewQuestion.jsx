import React, { useState } from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { Save, Close } from '@material-ui/icons';
import Header from '../../shared/components/Header';
import { components } from '../../shared/Contants';
import HeaderDivider from '../../shared/components/HeaderDivider';
import DescritiveQuestion from './DescritiveQuestion';
import { validateQuestion } from '../../shared/utils/QuestionValidators';

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
  const [newQuestion, setNewQuestion] = useState({});
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
      <DescritiveQuestion question={newQuestion} setQuestion={setNewQuestion} />
    </Grid>
  );
};
