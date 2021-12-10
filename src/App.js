
import './App.css';
import TopBar from "./components/navbar"
import BaseRouter from './router/router'
import { BrowserRouter as Router,HashRouter} from 'react-router-dom'
import Box from '@mui/material/Box';
// import { useTranslation} from 'react-i18next';
import {useSelector} from "react-redux"
import  Home from "./page/home-page"

function App() {
  const theme = useSelector((state)=>state.theme);
  const themeStyle = {
    Dark: '#282c34',
    Light:"#F3F3F3"
  }

  return (
    <div className="App" style={{backgroundColor:themeStyle[theme]}}>
      {/* <HashRouter> */}
        <TopBar /> 
          <Box sx={{width:'100%',minHeight: '100vh'}}>
            {/* <BaseRouter /> */}
            <Home/>
          </Box>
      {/* </HashRouter> */}
    </div>
  );
}

export default App;
