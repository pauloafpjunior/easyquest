import React, { useState } from 'react';
import { ThemeProvider, Grid, createMuiTheme, makeStyles } from '@material-ui/core';
import theme from './theme';
import QuestionList from './features/questionList/QuestionList';
import { components, questionType } from './shared/Contants';
import NewQuestion from './features/newQuestion/NewQuestion';

const muiTheme = createMuiTheme(theme);
const useStyles = makeStyles(() => ({
  '@global': theme.global,
}));

function App() {
  useStyles();
  const [active, setActive] = useState(components.questionList);
  const [questions, setQuestions] = useState([
    {
      id: '01',
      type: questionType.descritive,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at eros nec dui volutpat interdum eget non lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id rutrum justo.',
    },
    {
      id: '03',
      type: questionType.multiple,
      description:
        'Sed imperdiet nisi arcu, quis vulputate magna vulputate id. Pellentesque consequat tortor sit amet lorem tempus, vel dignissim risus varius.',
    },
  ]);

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <Grid className="screen-container">
        {active === components.questionList && (
          <QuestionList setActive={setActive} questions={questions} />
        )}
        {active === components.newQuestion && (
          <NewQuestion setActive={setActive} addQuestion={addQuestion} />
        )}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
