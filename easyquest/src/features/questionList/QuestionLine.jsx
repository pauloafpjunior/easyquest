import React, { useState } from 'react';
import { Grid, makeStyles, Tooltip, Typography } from '@material-ui/core';
import {
  Book,
  Edit,
  FileCopy,
  Delete,
  Message,
  Autorenew,
  Warning,
  SyncAlt,
} from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import ConfirmationDialog from '../../shared/components/ConfirmationDialog';
import { questionType } from '../../shared/Constants';
import textConstants from '../../shared/translations/textConstants';

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

  const verifyRemoveQuestion = () => {
    setDialogParams({
      title: t(textConstants.generalMessages.deleteQuestionTitle),
      text: t(textConstants.generalMessages.deleteQuestion),
      cancelText: t(textConstants.labels.cancelButton),
      confirmText: (
        <>
          <Warning /> {t(textConstants.labels.confirmButton)}
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
        {/* <Tooltip title={t(textConstants.tooltips.downloadButton)}>
          <GetApp onClick={downloadAsXml} className={style.actionIcon} />
        </Tooltip> */}
        <Tooltip title={t(textConstants.tooltips.editButton)}>
          <Edit className={style.actionIcon} onClick={() => editQuestion(question)} />
        </Tooltip>
        <Tooltip title={t(textConstants.tooltips.duplicateButton)}>
          <FileCopy className={style.actionIcon} onClick={() => duplicateQuestion(question)} />
        </Tooltip>
        <Tooltip title={t(textConstants.tooltips.deleteButton)}>
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
