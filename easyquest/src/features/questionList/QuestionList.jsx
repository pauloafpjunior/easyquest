import { Button, Input, Grid, InputAdornment, makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Add, Search } from '@material-ui/icons';
import Header from '../../shared/components/Header';
import QuestionLine from './QuestionLine';
import { components } from '../../shared/Contants';

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

export default ({ setActive, questions }) => {
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

  return (
    <Grid className={style.container}>
      <Header>
        <Button variant="outlined" onClick={addQuestion}>
          <Add className="button-icon" />
          NOVA
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
        <QuestionLine key={question.id} question={question} />
      ))}
    </Grid>
  );
};