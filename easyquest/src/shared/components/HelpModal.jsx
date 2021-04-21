import React from 'react';
import { Dialog, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { BONDI_BLUE } from '../../theme';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    fontSize: '32px',
  },
  container: { padding: '16px' },
  confirm: {
    width: '100px',
    display: 'block',
    margin: '24px auto 0 auto',
    border: `1px solid ${BONDI_BLUE}`,
  },
});

export default ({ open, setOpen }) => {
  const styles = useStyles();
  return (
    <Dialog onBackdropClick={() => setOpen(false)} open={open}>
      <Grid className={styles.container}>
        <Typography className={styles.title}>EasyQuest</Typography>
        <p>
          O EasyQuest tem como objetivo auxiliar usuários de sistemas Moodle oferecendo uma
          interface ágil e amigavel como alternativa à criação de questões padrão do Moodle.
        </p>
        <p>
          As questões criadas no EasyQuest podem ser exportadas através do botão
          &quot;Download&quot; e importadas no Moodle.
        </p>
        <Button className={styles.confirm} onClick={() => setOpen(false)}>
          Entendi
        </Button>
      </Grid>
    </Dialog>
  );
};
