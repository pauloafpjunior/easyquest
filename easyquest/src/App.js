import React, { useState } from 'react';
import { ThemeProvider, Grid, createMuiTheme, makeStyles } from '@material-ui/core';
import theme from './theme';
import QuestionList from './features/questionList/QuestionList';
import { components } from './shared/Contants';
import NewQuestion from './features/newQuestion/NewQuestion';

const muiTheme = createMuiTheme(theme);
const useStyles = makeStyles(() => ({
  '@global': theme.global,
}));

function App() {
  useStyles();
  const [active, setActive] = useState(components.questionList);
  return (
    <ThemeProvider theme={muiTheme}>
      <Grid className="screen-container">
        {active === components.questionList && <QuestionList setActive={setActive} />}
        {active === components.newQuestion && <NewQuestion setActive={setActive} />}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
