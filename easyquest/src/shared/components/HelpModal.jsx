import React from 'react';
import { Dialog, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { BONDI_BLUE } from '../../theme';
import textConstants from '../translations/textConstants';

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
  const { t } = useTranslation('common');
  const styles = useStyles();
  return (
    <Dialog onBackdropClick={() => setOpen(false)} open={open}>
      <Grid className={styles.container}>
        <Typography className={styles.title}>EasyQuest</Typography>
        <p>{t(textConstants.helpMessage.easyQuest)}</p>
        <p>{t(textConstants.helpMessage.import)}</p>
        <p>{t(textConstants.helpMessage.questions)}</p>
        <p>{t(textConstants.helpMessage.creators)}</p>
        <Button className={styles.confirm} onClick={() => setOpen(false)}>
        <p>{t(textConstants.labels.understoodButton)}</p>
        </Button>
      </Grid>
    </Dialog>
  );
};
