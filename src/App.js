import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { useState, useEffect } from "react";
import en from "./Dictionaries/en.json";
import es from "./Dictionaries/es.json";
import Home from './Pages/Home/Home';

function App() {

  // stablish default language at navigator's storage (if not previously existent)
  let storedLanguage = localStorage.getItem('language');
  if (!storedLanguage) {
    localStorage.setItem('language', navigator.language);
    storedLanguage = navigator.language;
  }

  const [languageSettings, setLanguageSettings] = useState({ messages: storedLanguage.startsWith("es") ? es : en, locale: storedLanguage });

  function setLang(lang) {
    const updatedLang = { messages: undefined, locale: lang };
    if (lang.startsWith(navigator.language.slice(0, 2))) {
      updatedLang.locale = navigator.language;
    }
    updatedLang.messages = updatedLang.locale.startsWith("es") ? es : en;
    localStorage.setItem("language", updatedLang.locale);
    setLanguageSettings(updatedLang);
  }

  return (
    <div className="App">
      <IntlProvider
          locale={languageSettings.locale}
          messages={languageSettings.messages}
      >
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home />} />
            </Routes>
          </BrowserRouter>
        </IntlProvider>
    </div>
  );
}

export default App;
