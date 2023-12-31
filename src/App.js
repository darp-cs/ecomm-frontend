// import { Main } from "./containers/Main"; //if needed input the "<Main />" jsx element on line 7
import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from './store'
import { Main } from "./containers/Main";
import './App.css';

function App() {
  return(
      <Provider store = {store}>
        <Main/>
      </Provider>
    
  )

}

export default App;
