import { Button, Input, Grid, InputAdornment, makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Add, Search } from '@material-ui/icons';
import Header from '../../shared/components/Header';
import QuestionLine from './QuestionLine';
import { questionType } from '../../shared/Contants';

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

export default () => {
  const classes = useStyles();
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [filter, setFilter] = useState('');
  const [questions] = useState([
    {
      type: questionType.descritive,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at eros nec dui volutpat interdum eget non lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id rutrum justo.',
    },
    {
      type: questionType.trueFalse,
      description:
        'Vestibulum risus ante, ullamcorper convallis bibendum vel, pretium eu libero. Maecenas nisi nisl, hendrerit vel auctor quis, mattis pellentesque elit. Fusce nec mi ac nulla lobortis dapibus in non erat. Etiam sodales justo nec congue blandit.',
    },
    {
      type: questionType.multiple,
      description:
        'Sed imperdiet nisi arcu, quis vulputate magna vulputate id. Pellentesque consequat tortor sit amet lorem tempus, vel dignissim risus varius.',
    },
  ]);

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

  return (
    <Grid className={classes.container}>
      <Header>
        <Button variant="outlined">
          <Add className="button-icon" />
          NOVA
        </Button>
      </Header>
      <Input
        fullWidth
        onChange={(e) => setFilter(e.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <Search className={classes.icon} />
          </InputAdornment>
        }
        className={classes.input}
        placeholder="Pesquisar..."
      />
      {filteredQuestions.map((question) => (
        <QuestionLine question={question} />
      ))}
    </Grid>
  );
};
