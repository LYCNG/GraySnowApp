import React from 'react'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import EmailIcon from '@mui/icons-material/Email';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTranslation} from 'react-i18next';
function LoginPage() {
    const {t} = useTranslation();
    const handleRegister=()=>{

    }
    const renderRegister=(
        <>
            <Box sx={{ display: 'flex', alignItems: 'flex-end',marginTop:"1.5em" }}>
                <TextField id="input-with-sx" label={t("register.check")} variant="standard" type="password"/>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end',marginTop:"1.5em" }}>
                <TextField id="input-with-sx" label={t("register.username")} variant="standard" type="password"/>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end',marginTop:"1.5em" }}>
                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label={t("register.email")} variant="standard" type="password"/>
            </Box>
        </>
    )

    return (
        <Box sx={{ 
            width: '50%',
            margin: 'auto',marginTop: 8,padding:"2em",
            display: 'flex', flexDirection: 'column',
            alignItems: 'center',border: '2px solid blue',boxShadow:"10px 10px 6px 4px #aaaaaa"}}>
            <Typography variant="h3" component="div" gutterBottom sx={{fontWeight:"bold",color:"blue"}}>
                {t("login.title")}
            </Typography>
            <FormControl variant="standard">
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label={t("login.account")} variant="standard" />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end',marginTop:"1.5em" }}>
                    <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label={t("login.account")} variant="standard" type="password"/>
                </Box>
            </FormControl>
            <FormControlLabel control={<Checkbox defaultChecked />} label={t("login.remember")} sx={{marginTop:"1.5em"}}/>
            <Box sx={{ marginTop:'2em'}}>
                <Button variant="contained">{t("login.login")}</Button>
                <Button variant="contained" color= 'warning' sx={{ marginLeft:"2em" }}>{t("login.register")}</Button>
            </Box>
            
        </Box>
    )
}

export default LoginPage
