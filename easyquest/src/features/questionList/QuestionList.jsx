import { Button, Input, Grid, InputAdornment, makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Add, Search, GetApp, Delete } from '@material-ui/icons';
import Header from '../../shared/components/Header';
import QuestionLine from './QuestionLine';
import { components } from '../../shared/Contants';
import HeaderDivider from '../../shared/components/HeaderDivider';
import Converter from '../../shared/utils/Converters';

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

export default ({ setActive, questions, removeQuestion, removeAll }) => {
  const style = useStyles();
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [filter, setFilter] = useState('');

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

  const downloadObjectAsJson = (str) => {
    const dataStr = `data:text/xml;charset=utf-8,${encodeURIComponent(str)}`;
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', `question.xml`);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const download = () => {
    downloadObjectAsJson(Converter[0].converter(questions[0]));
  };

  return (
    <Grid className={style.container}>
      <Header>
        <Button variant="outlined" onClick={addQuestion} style={{ marginRight: '8px' }}>
          <Add className="button-icon" />
          NOVA
        </Button>
        <Button variant="outlined" onClick={download}>
          <GetApp className="button-icon" />
          DOWNLOAD
        </Button>
        <HeaderDivider />
        <Button variant="outlined" onClick={removeAll}>
          <Delete className="button-icon" />
          LIMPAR
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
        placeholder="Pesquisar..."
      />
      {filteredQuestions.map((question) => (
        <QuestionLine key={question.id} removeQuestion={removeQuestion} question={question} />
      ))}
    </Grid>
  );
};
