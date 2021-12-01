
import './App.css';
import {TopBar} from "./components"
import BaseRouter from './router'
import { BrowserRouter as Router} from 'react-router-dom'
import Box from '@mui/material/Box';
// import { useTranslation} from 'react-i18next';
import {useSelector} from "react-redux"
const {REACT_APP_PUBLIC_URL} = process.env

function App() {
 
  const theme = useSelector((state)=>state.theme)
  const usePublic = true;
  
  const themeStyle = {
    Dark: '#282c34',
    Light:"#F3F3F3"
  }

  return (
    <div className="App" style={{backgroundColor:themeStyle[theme]}}>
      <TopBar /> 
      <Router basename={usePublic?REACT_APP_PUBLIC_URL:null} >
        <Box sx={{width:'100%',minHeight: '100vh'}}>
          <BaseRouter />
        </Box>
      </Router>
    </div>
  );
}

export default App;
