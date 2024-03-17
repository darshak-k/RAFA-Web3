import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

const App = () => {

  const { t } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState('en');

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return (
    <div>
       <h1
        onMouseEnter={() => changeLanguage('hi')} 
        onMouseLeave={() => changeLanguage(currentLanguage)}
        onClick={() => changeLanguage('hi')}>
        hi
      </h1>
      <h1
        onMouseEnter={() => changeLanguage('en')} 
        onMouseLeave={() => changeLanguage(currentLanguage)}
        onClick={() => changeLanguage('en')}>
        en
      </h1>
      <h1>{t('welcome')}</h1>
      <ul>
        <li>{t('listItem1')}</li>
        <li>{t('listItem2')}</li>
        <li>{t('listItem3')}</li>
      </ul>
    </div>
  )
}

export default App
