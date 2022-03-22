import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
          <Topbar />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
