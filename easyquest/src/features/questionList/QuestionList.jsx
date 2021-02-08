import { Button, Input, Grid, InputAdornment, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { Add, Search } from '@material-ui/icons';
import Header from '../../shared/components/Header';
import QuestionLine from './QuestionLine';

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
  const [questions] = useState([
    {
      type: 'multiple',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at eros nec dui volutpat interdum eget non lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id rutrum justo.',
    },
    {
      type: 'true/false',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at eros nec dui volutpat interdum eget non lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id rutrum justo.',
    },
  ]);

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
        startAdornment={
          <InputAdornment position="start">
            <Search className={classes.icon} />
          </InputAdornment>
        }
        className={classes.input}
        placeholder="Pesquisar..."
      />
      {questions.map((question) => (
        <QuestionLine question={question} />
      ))}
    </Grid>
  );
};
