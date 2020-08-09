import React from 'react';
import { IntlProvider } from 'react-intl';
import messagesEn from "./en.json";

const messages = {
  'en': messagesEn
};

const language = navigator.language.split(/[-_]/)[0];

const LocaleProvider = props => 
  <IntlProvider locale={language} messages={messages[language]}>
    {props.children}
  </IntlProvider>

export default LocaleProvider;
