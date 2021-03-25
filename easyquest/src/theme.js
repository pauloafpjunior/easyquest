export const BONDI_BLUE = '#0494A4';
export const CORNFLOWER_BLUE = '#6D9EEB';
export const ZIGGURAT = '#C2E0DF';
export const TEAL_BLUE = '#044C54';
export const COD_GRAY = '#0A0A0A';
export const WHITE = '#FFF';

export default {
  typography: {
    h1: {
      color: WHITE,
      fontSize: '30px',
      fontWeight: 'bold',
    },
  },
  global: {
    '.screen-container': {
      height: '100vh',
      width: '100vw',
      backgroundColor: WHITE,
      display: 'flex',
      justifyContent: 'center',
    },
    '.button-icon': {
      height: '30px',
      width: '30px',
      marginRight: '4px',
    },
    '.ck-editor__editable_inline': {
      minHeight: '200px',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
      outlined: {
        boxSizing: 'border-box',
        height: '40px',
        border: `3px solid ${WHITE}`,
        color: WHITE,
        fontWeight: 'bold',
        fontSize: '20px',
        borderRadius: '9px',
        '&:hover': {
          backgroundColor: CORNFLOWER_BLUE,
        },
      },
    },
  },
};
