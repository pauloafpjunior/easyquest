import React, { useState } from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import HelpIcon from '@material-ui/icons/Help';
import GitHubIcon from '@material-ui/icons/GitHub';
import { BONDI_BLUE, COD_GRAY, WHITE } from '../../theme';
import HelpModal from './HelpModal';
import textConstants from '../translations/textConstants';

const useStyles = makeStyles({
  header: {
    position: 'relative',
    zIndex: '1002',
    width: '100%',
    height: '70px',
    backgroundColor: BONDI_BLUE,
    borderBottom: `3px solid ${COD_GRAY}`,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 10px',
  },
  helpIcon: {
    marginLeft: '8px',
    color: WHITE,
    width: '28px',
    height: '28px',
    cursor: 'pointer',
  },
  githubIcon: {
    marginLeft: '8px',
    marginRight: 'auto',
    color: WHITE,
    width: '24px',
    height: '24px',
    cursor: 'pointer',
  },
});

export default ({ children }) => {
  const style = useStyles();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation('common');
  return (
    <Grid className={style.header}>
      <Typography variant="h1">{t(textConstants.appName)}</Typography>
      <HelpIcon className={style.helpIcon} onClick={() => setOpen(true)} />
      <GitHubIcon
        onClick={() => window.open('https://github.com/pauloafpjunior/easyquest')}
        className={style.githubIcon}
      />
      {children}
      <HelpModal open={open} setOpen={setOpen} />
    </Grid>
  );
};
