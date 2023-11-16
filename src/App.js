// import { Main } from "./containers/Main"; //if needed input the "<Main />" jsx element on line 7
import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Main } from "./containers/Main";
import './App.css';

function App() {
  return(
    <div>
      <Main/>
    </div>
  )

}

export default App;
