import React from 'react'
import {HashRouter} from 'react-router-dom'
import UsingRouter from './Pages/UsingRouter.js'
import './App.css'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <UsingRouter/>
      </HashRouter>
    </div>
  );
}

export default App