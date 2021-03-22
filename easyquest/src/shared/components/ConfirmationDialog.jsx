import React from 'react';
import { Dialog, DialogTitle, Button, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    width: '500px',
    display: 'flex',
    flexDirection: 'column',
  },
  cancelRow: {
    display: 'flex',
    padding: '0 60px 0 200px',
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
  } = dialogParams;

  const defaultClose = () => {
    setOpen(false);
  };
  return (
    <Dialog onClose={onClose} open={open}>
      <Grid className={styles.container}>
        <DialogTitle>{title}</DialogTitle>
        {text && <Typography className={styles.text}>{text}</Typography>}
        {canCancel && (
          <Grid className={styles.cancelRow}>
            <Button onClick={onCancel ?? defaultClose}>{cancelText}</Button>
            <Button onClick={onConfirm ?? defaultClose}>{confirmText}</Button>
          </Grid>
        )}
        {!canCancel && (
          <Grid className={styles.confirmRow}>
            <Button onClick={onConfirm ?? defaultClose}>{confirmText}</Button>
          </Grid>
        )}
      </Grid>
    </Dialog>
  );
};
