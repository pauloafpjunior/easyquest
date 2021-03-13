import React, { useEffect, useState } from 'react';
import { ThemeProvider, Grid, createMuiTheme, makeStyles } from '@material-ui/core';
import theme from './theme';
import QuestionList from './features/questionList/QuestionList';
import { appLocalStorageKey, components } from './shared/Contants';
import NewQuestion from './features/newQuestion/NewQuestion';

const muiTheme = createMuiTheme(theme);
const useStyles = makeStyles(() => ({
  '@global': theme.global,
}));

function App() {
  useStyles();
  const [active, setActive] = useState(components.questionList);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const localContent = localStorage.getItem(appLocalStorageKey);
    setQuestions(localContent ? JSON.parse(localContent) : []);
  }, [appLocalStorageKey]);

  const addQuestion = (question) => {
    questions.push(question);
    setQuestions([...questions]);
    localStorage.setItem(appLocalStorageKey, JSON.stringify(questions));
  };

  const removeQuestion = (id) => {
    const index = questions.findIndex((q) => q.id === id);
    questions.splice(index, 1);
    localStorage.setItem(appLocalStorageKey, JSON.stringify(questions));
    setQuestions([...questions]);
  };

  const removeAll = () => {
    localStorage.setItem(appLocalStorageKey, JSON.stringify([]));
    setQuestions([]);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <Grid className="screen-container">
        {active === components.questionList && (
          <QuestionList
            setActive={setActive}
            questions={questions}
            removeQuestion={removeQuestion}
            removeAll={removeAll}
          />
        )}
        {active === components.newQuestion && (
          <NewQuestion setActive={setActive} addQuestion={addQuestion} />
        )}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
