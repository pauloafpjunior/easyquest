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
} from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import Converter from '../../shared/utils/Converters';
import ConfirmationDialog from '../../shared/components/ConfirmationDialog';
import { DownloadXmlFile } from '../../shared/utils/Utils';
import { questionType } from '../../shared/Constants';

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
  const getIcon = () => {
    switch (question.type) {
      case questionType.multiple.constant:
        return <Message className={style.typeIcon} />;
      case questionType.trueFalse.constant:
        return <Autorenew className={style.typeIcon} />;
      case questionType.descritive.constant:
      default:
        return <Book className={style.typeIcon} />;
    }
  };

  const downloadAsXml = () => {
    DownloadXmlFile(Converter[0].converter(question), 'question.xml');
  };

  return (
    <>
      <Grid className={style.container}>
        {getIcon()}
        <Typography noWrap className={style.description}>
          {question.title}
        </Typography>
        <Tooltip title={t('tooltips.downloadButton')}>
          <GetApp onClick={downloadAsXml} className={style.actionIcon} />
        </Tooltip>
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
            onClick={() => setOpenDialog(true)}
          />
        </Tooltip>
      </Grid>
      <ConfirmationDialog
        open={openDialog}
        setOpen={setOpenDialog}
        dialogParams={{
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
        }}
      />
    </>
  );
};
