import { Button, Input, Grid, InputAdornment, makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Add, Search, Delete } from '@material-ui/icons';
import Header from '../../shared/components/Header';
import QuestionLine from './QuestionLine';
import { components, generalMessages } from '../../shared/Constants';
import HeaderDivider from '../../shared/components/HeaderDivider';
import ConfirmationDialog from '../../shared/components/ConfirmationDialog';

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

export default ({
  setActive,
  questions,
  editQuestion,
  duplicateQuestion,
  removeQuestion,
  removeAll,
}) => {
  const style = useStyles();
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
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

  const checkRemoveAll = () => {
    if (questions.length > 0) {
      setOpenDialog(true);
    }
  };

  return (
    <>
      <Grid className={style.container}>
        <Header>
          <Button variant="outlined" onClick={addQuestion}>
            <Add className="button-icon" />
            NOVA
          </Button>
          <HeaderDivider />
          <Button variant="outlined" onClick={checkRemoveAll}>
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
          <QuestionLine
            key={question.id}
            removeQuestion={removeQuestion}
            question={question}
            editQuestion={editQuestion}
            duplicateQuestion={duplicateQuestion}
          />
        ))}
      </Grid>
      <ConfirmationDialog
        open={openDialog}
        setOpen={setOpenDialog}
        dialogParams={{
          title: generalMessages.clearQuestionsTitle,
          text: generalMessages.clearQuestions,
          cancelText: 'Cancelar',
          confirmText: 'Confirmar',
          onConfirm: () => {
            removeAll();
            setOpenDialog(false);
          },
          canCancel: true,
        }}
      />
    </>
  );
};
