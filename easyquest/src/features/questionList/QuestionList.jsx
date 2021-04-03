import { Button, Input, Grid, InputAdornment, makeStyles, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Add, Search, Delete, GetApp, Warning } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import Header from '../../shared/components/Header';
import QuestionLine from './QuestionLine';
import { appDontShowDownloadMessageStorageKey, components } from '../../shared/Constants';
import HeaderDivider from '../../shared/components/HeaderDivider';
import ConfirmationDialog from '../../shared/components/ConfirmationDialog';
import Converters from '../../shared/utils/Converters';
import { DownloadXmlFile } from '../../shared/utils/Utils';
import { BONDI_BLUE } from '../../theme';

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
  emptyListText: {
    textAlign: 'center',
    marginTop: '16px',
  },
});

export default ({
  setActive,
  questions,
  editQuestion,
  duplicateQuestion,
  removeQuestion,
  removeAll,
}) => {
  const style = useStyles();
  const { t } = useTranslation('common');
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [filter, setFilter] = useState('');
  const [dialogParams, setDialogParams] = useState({});

  useEffect(() => {
    if (filter) {
      setFilteredQuestions(
        questions.filter((question) =>
          question.description.toLowerCase().includes(filter.toLowerCase())
        )
      );
    } else {
      setFilteredQuestions(questions);
    }
  }, [questions, filter]);

  const addQuestion = () => {
    setActive(components.newQuestion);
  };

  const checkRemoveAll = () => {
    if (questions.length > 0) {
      setDialogParams({
        title: t('generalMessages.clearQuestionsTitle'),
        text: t('generalMessages.clearQuestions'),
        cancelText: t('labels.cancelButton'),
        confirmText: (
          <>
            <Warning /> {t('labels.confirmButton')}
          </>
        ),
        onConfirm: () => {
          removeAll();
          setOpenDialog(false);
        },
        canCancel: true,
        confirmStyle: { backgroundColor: 'red', color: 'white' },
      });
      setOpenDialog(true);
    }
  };

  const downloadAll = () => {
    const localDontShowMessage = localStorage.getItem(appDontShowDownloadMessageStorageKey);
    if (localDontShowMessage) {
      DownloadXmlFile(Converters.MoodleXml.multipleConverter(questions), 'questions.xml');
    } else {
      setDialogParams({
        title: t('generalMessages.downloadFormatTitle'),
        text: t('generalMessages.downloadFormat'),
        cancelText: t('labels.downloadFormatCancel'),
        confirmText: t('labels.confirmButton'),
        onCancel: () => {
          localStorage.setItem(appDontShowDownloadMessageStorageKey, true);
          DownloadXmlFile(Converters.MoodleXml.multipleConverter(questions), 'questions.xml');
          setOpenDialog(false);
        },
        onConfirm: () => {
          DownloadXmlFile(Converters.MoodleXml.multipleConverter(questions), 'questions.xml');
          setOpenDialog(false);
        },
        canCancel: true,
        cancelStyle: { backgroundColor: BONDI_BLUE, color: 'white' },
        asHtml: true,
      });
      setOpenDialog(true);
    }
  };

  const getEmptyListText = () =>
    filter && questions.length > 0
      ? t('generalMessages.noQuestionsMatchFilter')
      : t('generalMessages.noQuestions');

  return (
    <>
      <Grid className={style.container}>
        <Header>
          <Button variant="outlined" onClick={addQuestion}>
            <Add className="button-icon" />
            {t('labels.newQuestionButton')}
          </Button>
          <Button variant="outlined" onClick={downloadAll} style={{ marginLeft: '8px' }}>
            <GetApp className="button-icon" />
            {t('labels.downloadAllButton')}
          </Button>
          <HeaderDivider />
          <Button variant="outlined" onClick={checkRemoveAll}>
            <Delete className="button-icon" />
            {t('labels.cleanQuestionsButton')}
          </Button>
        </Header>
        <Input
          fullWidth
          onChange={(e) => setFilter(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <Search className={style.icon} />
            </InputAdornment>
          }
          className={style.input}
          placeholder={t('labels.questionFilter')}
        />
        {filteredQuestions.length === 0 && (
          <Typography className={style.emptyListText}>{getEmptyListText()}</Typography>
        )}
        {filteredQuestions.map((question) => (
          <QuestionLine
            key={question.id}
            removeQuestion={removeQuestion}
            question={question}
            editQuestion={editQuestion}
            duplicateQuestion={duplicateQuestion}
          />
        ))}
      </Grid>
      <ConfirmationDialog open={openDialog} setOpen={setOpenDialog} dialogParams={dialogParams} />
    </>
  );
};
