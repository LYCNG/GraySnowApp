import {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Menu,MenuItem} from '@mui/material'
import Switch from '@mui/material/Switch';
import SideBar from "./sideBar/SideBar"
import neko from "../assets/img/nako.png"
import { useTranslation} from 'react-i18next';
import {bindActionCreators} from "redux";
import {actionCreator} from "../state/index"
import {useSelector,useDispatch} from "react-redux"
import FormControlLabel from '@mui/material/FormControlLabel';
import AccountCircle from '@mui/icons-material/AccountCircle';
function TopBar() {

    //redux store
    const dispatch = useDispatch();
    const {translate,switchMode,unAuthorize} = bindActionCreators(actionCreator,dispatch);
    let theme = useSelector(state => state.theme);//String
    let auth = useSelector(state => state.auth.auth);//Boolean
 
    //local state
    const [menuEl, setMenuEl] = useState(null);
    const [userEl,setUserEl] = useState(null);
    const [checked, setChecked] = useState(theme==="Dark");
    const menuId = 'primary-search-account-menu';
    const [showSideMenu,setShowSideMenu] = useState(false);
    const darkTheme={"Dark":"#1D1B8C",}
    //i18n
    const { t,i18n } = useTranslation();
    //function
    //--menu control
    const handleToggle=()=>{
        setShowSideMenu(true)
    };
    const changeLanguage = (lng) => {
        if(lng!==i18n.language) {
            i18n.changeLanguage(lng);
            translate(lng)
        }
        setMenuEl(null)
    };
    const handleClick = (event) => {
        event.preventDefault();
        setMenuEl(event.currentTarget);
    };
    const handleProfileMenuOpen = (event) => {
        setUserEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setUserEl(null);
    };
    const handleLogout = (e) => {
        e.preventDefault();
        // eslint-disable-next-line no-restricted-globals
        var ok = confirm("確認登出?")
        if(ok){
            unAuthorize(auth)
        }
        setUserEl(null);
    };
    //--mode control
    const handleSwitch=(e)=>{
        e.preventDefault()
        let bool =  e.target.checked
        setChecked(bool)
        switchMode(bool?"Dark":"Light")
    }

    const renderUserMenu = (
        <Menu
          anchorEl={userEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          id={menuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(userEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          <MenuItem onClick={handleLogout }>{t("appbar.Logout")}</MenuItem>
        </Menu>
      );


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
    
    const userAuth=(
        <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
        >
            <AccountCircle />
        </IconButton>
    )

    return (
        <Box sx={{ flexGrow: 5 }}>
            <AppBar position="static" sx={{backgroundColor:darkTheme[theme]}}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleToggle}
                    >
                    
                    <MenuIcon />
                </IconButton>
                <img src={neko} width={50} alt="logo" />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1,  textDecoration:"none" }} onClick={()=>window.location.href="/"}>
                    {t("appbar.title")}
                </Typography>
                <Box sx={{ flexGrow: 15 }} />
                <FormControlLabel control={<Switch  checked={checked} color="default" onChange={handleSwitch}/>} label={t(`appbar.${theme}`)} />
                <Button color="inherit" onClick={handleClick} disableElevation >{t("appbar.current")}</Button>
                {auth?userAuth:(
                    <Button color="inherit" href="/login">{t("appbar.Login")}</Button>
                )}

            </Toolbar>
            {<SideBar show={showSideMenu} setShow={setShowSideMenu}/>}
            {renderMenu}
            {renderUserMenu}
        </AppBar>
      </Box>
    );
}

export default TopBar;
