
import './App.css';
import {TopBar} from "./components"
import BaseRouter from './router'
import { BrowserRouter as Router } from 'react-router-dom'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
function App() {

  return (
    <div className="App">

      <TopBar /> 
  
      <Router >
        <Box sx={{width:'100%',height:'95%'}}>
          <BaseRouter />
        </Box>
      </Router>
    </div>
  );
}

export default App;
