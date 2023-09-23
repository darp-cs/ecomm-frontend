import { Main } from "./containers/Main"; //if needed input the "<Main />" jsx element on line 7
import React, { useState } from "react";
import './App.css';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <Main />
  );
}

export default App;
