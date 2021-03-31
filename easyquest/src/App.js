import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ThemeProvider, Grid, createMuiTheme, makeStyles } from '@material-ui/core';
import theme from './theme';
import QuestionList from './features/questionList/QuestionList';
import { appLocalStorageKey, components } from './shared/Constants';
import NewQuestion from './features/newQuestion/NewQuestion';

const muiTheme = createMuiTheme(theme);
const useStyles = makeStyles(() => ({
  '@global': theme.global,
}));

function App() {
  useStyles();
  const [active, setActive] = useState(components.questionList);
  const [questions, setQuestions] = useState([]);
  const [questionToEdit, setQuestionToEdit] = useState(null);

  useEffect(() => {
    const localContent = localStorage.getItem(appLocalStorageKey);
    setQuestions(localContent ? JSON.parse(localContent) : []);
  }, [appLocalStorageKey]);

  useEffect(() => {
    if (active === components.questionList) {
      setQuestionToEdit(null);
    }
  }, [active]);

  const addQuestion = (question) => {
    delete question.modified;
    const index = questions.findIndex((q) => q.id === question.id);
    if (index >= 0) {
      questions[index] = question;
    } else {
      questions.push(question);
    }
    setQuestions([...questions]);
    localStorage.setItem(appLocalStorageKey, JSON.stringify(questions));
    setQuestionToEdit(null);
  };

  const editQuestion = (question) => {
    delete question.modified;
    setQuestionToEdit(question);
    setActive(components.newQuestion);
  };

  const duplicateQuestion = (question) => {
    addQuestion({ ...question, title: `(Cópia) ${question.title}`, id: uuid() });
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
            editQuestion={editQuestion}
            duplicateQuestion={duplicateQuestion}
            removeQuestion={removeQuestion}
            removeAll={removeAll}
          />
        )}
        {active === components.newQuestion && (
          <NewQuestion
            setActive={setActive}
            addQuestion={addQuestion}
            questionToEdit={questionToEdit}
          />
        )}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
