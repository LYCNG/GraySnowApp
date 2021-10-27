import {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Menu,MenuItem} from '@mui/material'
import neko from "../assets/img/nako.png"
import { useTranslation} from 'react-i18next';
import {bindActionCreators} from "redux";
import {actionCreator} from "../state/index"
import {useSelector,useDispatch} from "react-redux"

function TopBar() {

    const [menuEl, setMenuEl] = useState(null);
    const { t,i18n } = useTranslation();

    //redux store
    const dispatch = useDispatch();
    const {translate} = bindActionCreators(actionCreator,dispatch);
    const ln = useSelector((state)=>state.language);
    //function
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        translate(lng)
        setMenuEl(null)
    };

    const handleClick = (event) => {
        event.preventDefault();
        setMenuEl(event.currentTarget);
      };

    const renderMenu = (
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={menuEl}
            open={Boolean(menuEl)}
            onClose={()=>setMenuEl(null)}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <MenuItem onClick={()=>changeLanguage("en")}>{t("appbar.english")}</MenuItem>
            <MenuItem onClick={()=>changeLanguage("zh-TW")}>{t("appbar.taiwan")}</MenuItem>
            <MenuItem onClick={()=>changeLanguage("zh-CN")}>{t("appbar.china")}</MenuItem>
            <MenuItem onClick={()=>changeLanguage("jp")}>{t("appbar.japan")}</MenuItem>
      </Menu>
    )

    return (
        <Box sx={{ flexGrow: 5 }}>
            <AppBar position="static">
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                <MenuIcon />
                </IconButton>
                <img src={neko} width={50} alt="logo" />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1,  textDecoration:"none" }} onClick={()=>console.log("hello")}>
                    {t("appbar.title")}
                </Typography>
                <Box sx={{ flexGrow: 15 }} />
                <Button variant="contained" onClick={handleClick} disableElevation>{ln}</Button>
                <Button color="inherit" href="/login">{t("appbar.Login")}</Button>
            </Toolbar>
            {renderMenu}
        </AppBar>
      </Box>
    );
}

export default TopBar;
