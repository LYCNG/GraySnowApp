
import './App.css';
import {TopBar} from "./components"
import BaseRouter from './router'
import { BrowserRouter as Router,HashRouter} from 'react-router-dom'
import Box from '@mui/material/Box';
// import { useTranslation} from 'react-i18next';
import {useSelector} from "react-redux"

function App() {
 
  const theme = useSelector((state)=>state.theme);
  const themeStyle = {
    Dark: '#282c34',
    Light:"#F3F3F3"
  }

  return (
    <HashRouter>
    <div className="App" style={{backgroundColor:themeStyle[theme]}}>
      <TopBar /> 
      {/* <Router basename={usePublic?REACT_APP_PUBLIC_URL:null} > */}
        <Box sx={{width:'100%',minHeight: '100vh'}}>
          <BaseRouter />
        </Box>
      {/* </Router> */}
    </div>
    </HashRouter>
  );
}

export default App;
