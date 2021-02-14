import { Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Save, Close } from '@material-ui/icons';
import Header from '../../shared/components/Header';
import { components } from '../../shared/Contants';
import HeaderDivider from '../../shared/components/HeaderDivider';

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

export default ({ setActive }) => {
  const style = useStyles();
  const close = () => setActive(components.questionList);

  return (
    <Grid className={style.container}>
      <Header>
        <Button variant="outlined">
          <Save className="button-icon" />
          SALVAR
        </Button>
        <HeaderDivider />
        <Button variant="outlined" onClick={close}>
          <Close className="button-icon" />
          FECHAR
        </Button>
      </Header>
    </Grid>
  );
};
