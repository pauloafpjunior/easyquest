import React, { useState } from 'react';
import { Button, Grid, makeStyles, Select, MenuItem, Typography, Input } from '@material-ui/core';
import { Save, Close, Warning } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import Header from '../../shared/components/Header';
import { components, questionType } from '../../shared/Constants';
import HeaderDivider from '../../shared/components/HeaderDivider';
import DescritiveQuestion from './DescritiveQuestion';
import { validateQuestion } from '../../shared/utils/QuestionValidators';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import TrueFalseQuestion from './TrueFalseQuestion';
import ConfirmationDialog from '../../shared/components/ConfirmationDialog';
import AssociativeQuestion from './AssociativeQuestion';
import textConstants from '../../shared/translations/textConstants';
import { BONDI_BLUE } from '../../theme';

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
  const { t } = useTranslation('common');

  const [newQuestion, setNewQuestion] = useState(questionToEdit ?? null);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogParams, setDialogParams] = useState({ open: openDialog, setOpen: setOpenDialog });
  const [newQuestionType, setNewQuestionType] = useState(
    questionToEdit?.type ?? questionType.multiple.constant
  );
  const close = () => setActive(components.questionList);
  const setErrorDialog = (errorMessage) => {
    setDialogParams({
      title: t(textConstants.validationMessages.invalidQuestion),
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
        title: t(textConstants.generalMessages.confirmCloseTitle),
        text: t(textConstants.generalMessages.confirmClose),
        cancelText: t(textConstants.labels.cancelButton),
        confirmText: (
          <>
            <Warning /> {t(textConstants.labels.confirmButton)}
          </>
        ),
        onConfirm: close,
        canCancel: true,
        confirmStyle: { backgroundColor: 'red', color: 'white' },
      });
      setOpenDialog(true);
    }
  };

  const onCloseWarning = () => {
    localStorage.setItem('rememberDownload', true);
    close();
  };

  const downloadWarning = () => {
    if (localStorage.getItem('rememberDownload')) {
      close();
    }
    setDialogParams({
      title: t(textConstants.rememberDownload.title),
      text: t(textConstants.rememberDownload.text),
      confirmText: t(textConstants.rememberDownload.confirm),
      cancelText: t(textConstants.rememberDownload.cancel),
      canCancel: true,
      confirmStyle: { backgroundColor: BONDI_BLUE, color: 'white' },
      onConfirm: close,
      onCancel: onCloseWarning,
    });
    setOpenDialog(true);
  };

  const save = () => {
    const error = validateQuestion(newQuestion, t);
    if (error) {
      setErrorDialog(error);
      return;
    }
    addQuestion(newQuestion);
    downloadWarning();
  };
  const handleChangeType = (event) => {
    if (
      newQuestion.type !== questionType.multiple ||
      newQuestion.alternatives.every((a) => !!a.text)
    ) {
      setNewQuestionType(event.target.value);
      return;
    }
    setDialogParams({
      title: t(textConstants.generalMessages.changeTypeTitle),
      text: t(textConstants.generalMessages.changeType),
      cancelText: t(textConstants.labels.cancelButton),
      confirmText: (
        <>
          <Warning /> {t(textConstants.labels.confirmButton)}
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
    setNewQuestion({ ...newQuestion, title: event.target.value, modified: true });
  };

  return (
    <>
      <Grid className={style.container}>
        <Header>
          <Button variant="outlined" onClick={save}>
            <Save className="button-icon" />
            {t(textConstants.labels.saveNewQuestion)}
          </Button>
          <HeaderDivider />
          <Button variant="outlined" onClick={setConfirmCloseDialog}>
            <Close className="button-icon" />
            {t(textConstants.labels.closeNewQuestion)}
          </Button>
        </Header>
        <Grid className={style.content}>
          <Grid className={style.row}>
            <Typography className={style.label}>{t(textConstants.labels.questionType)}</Typography>
            <Select value={newQuestionType} onChange={handleChangeType}>
              {Object.values(questionType).map((qType) => (
                <MenuItem key={qType.constant} value={qType.constant}>
                  {t(qType.value)}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid className={style.row}>
            <Typography className={style.label}>{t(textConstants.labels.questionTitle)}</Typography>
            <Input
              style={{ width: '620px' }}
              value={newQuestion?.title ?? ''}
              onChange={handleTitle}
            />
          </Grid>

          <Grid style={{ textAlign: 'left' }}>
            {newQuestionType === questionType.descritive.constant && (
              <DescritiveQuestion question={newQuestion} setQuestion={setNewQuestion} />
            )}
            {newQuestionType === questionType.multiple.constant && (
              <MultipleChoiceQuestion
                question={newQuestion}
                removeQuestion={removeQuestion}
                setQuestion={setNewQuestion}
              />
            )}
            {newQuestionType === questionType.trueFalse.constant && (
              <TrueFalseQuestion trueFalse question={newQuestion} setQuestion={setNewQuestion} />
            )}
            {newQuestionType === questionType.associative.constant && (
              <AssociativeQuestion
                question={newQuestion}
                removeQuestion={removeQuestion}
                setQuestion={setNewQuestion}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
      <ConfirmationDialog open={openDialog} setOpen={setOpenDialog} dialogParams={dialogParams} />
    </>
  );
};
