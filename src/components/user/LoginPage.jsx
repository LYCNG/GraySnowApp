import React,{useState} from 'react'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTranslation} from 'react-i18next';
import {bindActionCreators} from "redux";
import {actionCreator} from "../../state/index"
import {useSelector,useDispatch} from "react-redux"

function LoginPage() {
    const {t} = useTranslation();

    const [register,setRegister] = useState(false);
    const [inputData,setInputData] = useState({account:"",password:""});
    const dispatch = useDispatch();
    const {authorize} = bindActionCreators(actionCreator,dispatch);
    const handleRegister=()=>{
        setRegister(prev=>!prev)
    };

    const handleLogin=()=>{
        let ac=inputData.account,pd = inputData.password;
        //user axios to post login state
        if(ac==="admin"&&pd==="test123"){
            alert("login!")
            authorize({auth:true,username:"fsAdmin"})
        }else{
            alert(t("login.incorrect"))
        }
    };

    const renderRegister=(
        <>
            <Box sx={{ display: 'flex', alignItems: 'flex-end',marginTop:"1.5em" }}>
                <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label={t("register.check")} variant="standard" type="password"/>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end',marginTop:"1.5em" }}>
                <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label={t("register.username")} variant="standard" type="password"/>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end',marginTop:"1.5em" }}>
                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label={t("register.email")} variant="standard" type="password"/>
            </Box>
        </>
    )

    const loginButton = (
        <>
            <Button variant="contained" onClick={handleLogin}>{t("login.login")}</Button>
            <Button variant="contained" color='warning' startIcon={<ArrowForwardIosIcon />} sx={{ marginLeft:"2em" }} onClick={handleRegister}>
                {t("login.register")}
            </Button>
        </>
    ) 
    const registerButton = (
        <>
            <Button variant="contained" onClick={()=>alert("sign up")}>{t("register.sign_up")}</Button>
            <Button variant="contained" color= 'warning' startIcon={<ArrowBackIosIcon />} sx={{ marginLeft:"2em" }} onClick={handleRegister}>
                {t("register.back")}
            </Button>
        </>
    )

    return (
        <Box sx={{ 
            width: '50%',
            backgroundColor: 'white',
            margin: 'auto',marginTop: 8,padding:"2em",
            display: 'flex', flexDirection: 'column',
            alignItems: 'center',border: '2px solid blue',boxShadow:"5px 5px 8px 3px #000000"}}>
            <Typography variant="h3" component="div" gutterBottom sx={{fontWeight:"bold",color:"blue"}}>
                {!register?t("login.title"):t("register.title")}
            </Typography>
            <FormControl variant="standard">
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField 
                        id="input-with-sx" label={t("login.account")} 
                        variant="standard" onChange={(e)=>setInputData({...inputData,account:e.target.value})}
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end',marginTop:"1.5em" }}>
                    <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField
                        id="input-with-sx" label={t("login.password")} 
                        variant="standard" type="password" onChange={(e)=>setInputData({...inputData,password:e.target.value})}
                        />
                </Box>
                {register?renderRegister:null}
            </FormControl>
            {!register?<FormControlLabel control={<Checkbox defaultChecked />} label={t("login.remember")} sx={{marginTop:"1.5em"}}/>:null}
            <Box sx={{ marginTop:'2em'}}>
                {!register?loginButton:registerButton}
            </Box>
            
        </Box>
    )
}

export default LoginPage
