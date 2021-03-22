import React, { useState } from 'react';
import { Button, Grid, makeStyles, Select, MenuItem } from '@material-ui/core';
import { Save, Close } from '@material-ui/icons';
import Header from '../../shared/components/Header';
import {
  components,
  questionType,
  validationMessages,
  generalMessages,
} from '../../shared/Constants';
import HeaderDivider from '../../shared/components/HeaderDivider';
import DescritiveQuestion from './DescritiveQuestion';
import { validateQuestion } from '../../shared/utils/QuestionValidators';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import TrueFalseQuestion from './TrueFalseQuestion';
import ConfirmationDialog from '../../shared/components/ConfirmationDialog';

const useStyles = makeStyles({
  container: {
    width: '100%',
  },
  content: {
    padding: '0 calc(50% - 315px)',
    height: 'calc(100vh - 70px)',
    overflowY: 'auto',
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

export default ({ setActive, addQuestion, removeQuestion, questionToEdit }) => {
  const style = useStyles();
  const [newQuestion, setNewQuestion] = useState(questionToEdit ?? null);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogParams, setDialogParams] = useState({ open: openDialog, setOpen: setOpenDialog });
  const [newQuestionType, setNewQuestionType] = useState(
    questionToEdit?.type ?? questionType.multiple
  );
  const close = () => setActive(components.questionList);
  const setErrorDialog = (errorMessage) => {
    setDialogParams({
      title: validationMessages.invalidQuestion,
      text: errorMessage,
      confirmText: 'Ok',
    });
    setOpenDialog(true);
  };

  const setConfirmCloseDialog = () => {
    if (!newQuestion.modified) {
      close();
    } else {
      setDialogParams({
        title: generalMessages.confirmCloseTitle,
        text: generalMessages.confirmClose,
        cancelText: 'Cancelar',
        confirmText: 'Confirmar',
        onConfirm: close,
        canCancel: true,
      });
      setOpenDialog(true);
    }
  };
  const save = () => {
    const error = validateQuestion(newQuestion);
    if (error) {
      setErrorDialog(error);
      return;
    }
    addQuestion(newQuestion);
    close();
  };
  const handleChangeType = (event) => {
    setNewQuestionType(event.target.value);
  };

  return (
    <>
      <Grid className={style.container}>
        <Header>
          <Button variant="outlined" onClick={save}>
            <Save className="button-icon" />
            SALVAR
          </Button>
          <HeaderDivider />
          <Button variant="outlined" onClick={setConfirmCloseDialog}>
            <Close className="button-icon" />
            FECHAR
          </Button>
        </Header>
        <Grid className={style.content}>
          <Select value={newQuestionType} onChange={handleChangeType}>
            {Object.values(questionType).map((qType) => (
              <MenuItem key={qType} value={qType}>
                {qType}
              </MenuItem>
            ))}
          </Select>
          {newQuestionType === questionType.descritive && (
            <DescritiveQuestion question={newQuestion} setQuestion={setNewQuestion} />
          )}
          {newQuestionType === questionType.multiple && (
            <MultipleChoiceQuestion
              question={newQuestion}
              removeQuestion={removeQuestion}
              setQuestion={setNewQuestion}
            />
          )}
          {newQuestionType === questionType.trueFalse && (
            <TrueFalseQuestion trueFalse question={newQuestion} setQuestion={setNewQuestion} />
          )}
        </Grid>
      </Grid>
      <ConfirmationDialog open={openDialog} setOpen={setOpenDialog} dialogParams={dialogParams} />
    </>
  );
};
