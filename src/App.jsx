import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EuiProvider } from '@elastic/eui'
import { GlobalProvider } from './components/Global';
import '@elastic/eui/dist/eui_theme_light.css'
import Home from './pages/Home';
import Error404 from './pages/404';
import config from './config/config';

function App() {

  useEffect(() => {
    // Get the current port
    const port = window.location.port || '80'; // Default to port 80 if not found
    // Update the page title with the port
    if(port !== '80' && port !== '443'){
      document.title = `[${port}] ${config.app.title}`;
    }else{
      document.title = `${config.app.title}`;
    }
  }, []);

  return (
    <>
    <GlobalProvider>
      <EuiProvider colorMode={'light'} >
        <Router>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/*" element={<Error404/>} />
          </Routes>    
        </Router>
      </EuiProvider>
    </GlobalProvider>
    </>
  );
}

export default App;