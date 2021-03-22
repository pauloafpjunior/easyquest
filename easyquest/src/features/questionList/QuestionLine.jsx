import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Book, Edit, FileCopy, Delete, Message, Autorenew, GetApp } from '@material-ui/icons';
import { questionType } from '../../shared/Constants';
import Converter from '../../shared/utils/Converters';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '10px 0px 10px 0px',
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
    margin: '0px 4px',
    cursor: 'pointer',
  },
});

export default ({ question, editQuestion, duplicateQuestion, removeQuestion }) => {
  const style = useStyles();
  const getIcon = () => {
    switch (question.type) {
      case questionType.multiple:
        return <Message className={style.typeIcon} />;
      case questionType.trueFalse:
        return <Autorenew className={style.typeIcon} />;
      case questionType.descritive:
      default:
        return <Book className={style.typeIcon} />;
    }
  };
  const getText = () => question.description.replace(/(<([^>]+)>)/gi, ' ');

  const downloadAsXml = () => {
    const dataStr = `data:text/xml;charset=utf-8,${encodeURIComponent(
      Converter[0].converter(question)
    )}`;
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', `question.xml`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <Grid className={style.container}>
      {getIcon()}
      <Typography noWrap className={style.description}>
        {getText()}
      </Typography>
      <GetApp onClick={downloadAsXml} className={style.actionIcon} />
      <Edit className={style.actionIcon} onClick={() => editQuestion(question)} />
      <FileCopy className={style.actionIcon} onClick={() => duplicateQuestion(question)} />
      <Delete className={style.actionIcon} onClick={() => removeQuestion(question.id)} />
    </Grid>
  );
};
