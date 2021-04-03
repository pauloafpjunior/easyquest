import React from 'react';
import { Dialog, DialogTitle, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { BONDI_BLUE } from '../../theme';

const useStyles = makeStyles({
  container: {
    width: '500px',
    display: 'flex',
    flexDirection: 'column',
  },
  cancelRow: {
    display: 'flex',
    margin: '0 60px 0 auto',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  confirmRow: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '16px',
  },
  text: {
    padding: '0 24px 16px 24px',
  },
  confirm: {
    marginLeft: '8px',
  },
});

export default ({ open, setOpen, dialogParams }) => {
  const styles = useStyles();
  const {
    title,
    text,
    onClose,
    onCancel,
    onConfirm,
    canCancel,
    confirmText,
    cancelText,
    confirmStyle,
    cancelStyle,
    asHtml,
  } = dialogParams;

  const defaultClose = () => {
    setOpen(false);
  };
  return (
    <Dialog onClose={onClose} open={open}>
      <Grid className={styles.container}>
        <DialogTitle>{title}</DialogTitle>
        {text && asHtml ? (
          <Typography className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
        ) : (
          <Typography className={styles.text}>{text}</Typography>
        )}
        {canCancel && (
          <Grid className={styles.cancelRow}>
            <Button
              style={cancelStyle ?? { border: `1px solid ${BONDI_BLUE}` }}
              onClick={onCancel ?? defaultClose}
            >
              {cancelText}
            </Button>
            <Button
              className={styles.confirm}
              style={confirmStyle ?? { border: `1px solid ${BONDI_BLUE}` }}
              onClick={onConfirm ?? defaultClose}
            >
              {confirmText}
            </Button>
          </Grid>
        )}
        {!canCancel && (
          <Grid className={styles.confirmRow}>
            <Button
              className={styles.confirm}
              style={confirmStyle ?? { border: `1px solid ${BONDI_BLUE}` }}
              onClick={onConfirm ?? defaultClose}
            >
              {confirmText}
            </Button>
          </Grid>
        )}
      </Grid>
    </Dialog>
  );
};
