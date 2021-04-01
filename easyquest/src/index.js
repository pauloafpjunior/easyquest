/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorkerRegistration';
import ptBr from './shared/translations/pt-br';
import en from './shared/translations/en';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'pt',
  resources: {
    pt: {
      common: ptBr,
    },
    en: {
      common: en,
    },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);

reportWebVitals();
serviceWorker.register();
