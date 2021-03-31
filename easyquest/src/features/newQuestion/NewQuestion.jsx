import React, { useState } from 'react';
import { Button, Grid, makeStyles, Select, MenuItem, Typography, Input } from '@material-ui/core';
import { Save, Close, Warning } from '@material-ui/icons';
import Header from '../../shared/components/Header';
import { components } from '../../shared/Constants';
import Language from '../../shared/Languages';
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
    padding: '0 calc(50% - 400px)',
    height: 'calc(100vh - 70px)',
    overflowY: 'auto',
    textAlign: 'center',
  },
  input: {
    fontSize: '22px',
    padding: '5px 5px 5px 5px',
  },
  icon: {
    height: '30px',
    width: '30px',
  },
  row: { display: 'flex', margin: '24px 0' },
  label: {
    width: '120px',
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default ({ setActive, addQuestion, removeQuestion, questionToEdit }) => {
  const style = useStyles();
  const [newQuestion, setNewQuestion] = useState(questionToEdit ?? null);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogParams, setDialogParams] = useState({ open: openDialog, setOpen: setOpenDialog });
  const [newQuestionType, setNewQuestionType] = useState(
    questionToEdit?.type ?? Language.questionType.multiple.constant
  );
  const close = () => setActive(components.questionList);
  const setErrorDialog = (errorMessage) => {
    setDialogParams({
      title: Language.validationMessages.invalidQuestion,
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
        title: Language.generalMessages.confirmCloseTitle,
        text: Language.generalMessages.confirmClose,
        cancelText: 'Cancelar',
        confirmText: (
          <>
            <Warning /> Confirmar
          </>
        ),
        onConfirm: close,
        canCancel: true,
        confirmStyle: { backgroundColor: 'red', color: 'white' },
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
    setDialogParams({
      title: Language.generalMessages.changeTypeTitle,
      text: Language.generalMessages.changeType,
      cancelText: 'Cancelar',
      confirmText: (
        <>
          <Warning /> Confirmar
        </>
      ),
      onConfirm: () => {
        setNewQuestionType(event.target.value);
        setOpenDialog(false);
      },
      canCancel: true,
      confirmStyle: { backgroundColor: 'red', color: 'white' },
    });
    setOpenDialog(true);
  };

  const handleTitle = (event) => {
    setNewQuestion({ ...newQuestion, title: event.target.value });
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
          <Grid className={style.row}>
            <Typography className={style.label}>Tipo:</Typography>
            <Select value={newQuestionType} onChange={handleChangeType}>
              {Object.values(Language.questionType).map((qType) => (
                <MenuItem key={qType.constant} value={qType.constant}>
                  {qType.value}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid className={style.row}>
            <Typography className={style.label}>Título:</Typography>
            <Input
              style={{ width: '620px' }}
              value={newQuestion?.title ?? ''}
              onChange={handleTitle}
            />
          </Grid>

          <Grid style={{ textAlign: 'left' }}>
            {newQuestionType === Language.questionType.descritive.constant && (
              <DescritiveQuestion question={newQuestion} setQuestion={setNewQuestion} />
            )}
            {newQuestionType === Language.questionType.multiple.constant && (
              <MultipleChoiceQuestion
                question={newQuestion}
                removeQuestion={removeQuestion}
                setQuestion={setNewQuestion}
              />
            )}
            {newQuestionType === Language.questionType.trueFalse.constant && (
              <TrueFalseQuestion trueFalse question={newQuestion} setQuestion={setNewQuestion} />
            )}
          </Grid>
        </Grid>
      </Grid>
      <ConfirmationDialog open={openDialog} setOpen={setOpenDialog} dialogParams={dialogParams} />
    </>
  );
};
