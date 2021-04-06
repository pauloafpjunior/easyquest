import React, { useState } from 'react';
import { Grid, makeStyles, Tooltip, Typography } from '@material-ui/core';
import {
  Book,
  Edit,
  FileCopy,
  Delete,
  Message,
  Autorenew,
  GetApp,
  Warning,
  SyncAlt,
} from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import Converters from '../../shared/utils/Converters';
import ConfirmationDialog from '../../shared/components/ConfirmationDialog';
import { DownloadXmlFile } from '../../shared/utils/Utils';
import { appDontShowDownloadMessageStorageKey, questionType } from '../../shared/Constants';
import { BONDI_BLUE } from '../../theme';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '8px 0px 8px 0px',
  },
  description: {
    marginRight: 'auto',
    fontSize: '22px',
  },
  typeIcon: {
    height: '22px',
    width: '22px',
    margin: '0px 8px',
  },
  actionIcon: {
    height: '22px',
    width: '22px',
    margin: '0px 8px',
    cursor: 'pointer',
  },
});

export default ({ question, editQuestion, duplicateQuestion, removeQuestion }) => {
  const style = useStyles();
  const { t } = useTranslation('common');
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogParams, setDialogParams] = useState({});
  const getIcon = () => {
    switch (question.type) {
      case questionType.multiple.constant:
        return <Message className={style.typeIcon} />;
      case questionType.trueFalse.constant:
        return <Autorenew className={style.typeIcon} />;
      case questionType.associative.constant:
        return <SyncAlt className={style.typeIcon} />;
      case questionType.descritive.constant:
      default:
        return <Book className={style.typeIcon} />;
    }
  };

  const downloadAsXml = () => {
    const localDontShowMessage = localStorage.getItem(appDontShowDownloadMessageStorageKey);
    if (localDontShowMessage) {
      DownloadXmlFile(Converters.MoodleXml.converter(question), 'question.xml');
    } else {
      setDialogParams({
        title: t('generalMessages.downloadFormatTitle'),
        text: t('generalMessages.downloadFormat'),
        cancelText: t('labels.downloadFormatCancel'),
        confirmText: t('labels.confirmButton'),
        onCancel: () => {
          localStorage.setItem(appDontShowDownloadMessageStorageKey, true);
          DownloadXmlFile(Converters.MoodleXml.converter(question), 'question.xml');
          setOpenDialog(false);
        },
        onConfirm: () => {
          DownloadXmlFile(Converters.MoodleXml.converter(question), 'question.xml');
          setOpenDialog(false);
        },
        canCancel: true,
        cancelStyle: { backgroundColor: BONDI_BLUE, color: 'white' },
        asHtml: true,
      });
      setOpenDialog(true);
    }
  };

  const verifyRemoveQuestion = () => {
    setDialogParams({
      title: t('generalMessages.deleteQuestionTitle'),
      text: t('generalMessages.deleteQuestion'),
      cancelText: t('labels.cancelButton'),
      confirmText: (
        <>
          <Warning /> {t('labels.confirmButton')}
        </>
      ),
      onConfirm: () => {
        removeQuestion(question.id);
        setOpenDialog(false);
      },
      canCancel: true,
      confirmStyle: { backgroundColor: 'red', color: 'white' },
    });
    setOpenDialog(true);
  };

  return (
    <>
      <Grid className={style.container}>
        {getIcon()}
        <Typography noWrap className={style.description}>
          {question.title}
        </Typography>
        {/* <Tooltip title={t('tooltips.downloadButton')}>
          <GetApp onClick={downloadAsXml} className={style.actionIcon} />
        </Tooltip> */}
        <Tooltip title={t('tooltips.editButton')}>
          <Edit className={style.actionIcon} onClick={() => editQuestion(question)} />
        </Tooltip>
        <Tooltip title={t('tooltips.duplicateButton')}>
          <FileCopy className={style.actionIcon} onClick={() => duplicateQuestion(question)} />
        </Tooltip>
        <Tooltip title={t('tooltips.deleteButton')}>
          <Delete
            style={{ marginRight: '24px' }}
            className={style.actionIcon}
            onClick={verifyRemoveQuestion}
          />
        </Tooltip>
      </Grid>
      <ConfirmationDialog open={openDialog} setOpen={setOpenDialog} dialogParams={dialogParams} />
    </>
  );
};
