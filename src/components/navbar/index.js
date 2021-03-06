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
import SideBar from "../sideBar/SideBar"
import neko from "../../assets/img/nako.png"
import { useTranslation} from 'react-i18next';
import {useSelector} from "react-redux"
import { useActions } from "../../hooks/useActions";
import FormControlLabel from '@mui/material/FormControlLabel';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import Zoom from '@mui/material/Zoom';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import Brightness6Icon from '@mui/icons-material/Brightness6';
//GA TRACK EVENT
import {eventTracker} from '../../hooks/useEventTracker';
// const {REACT_APP_GA_TRACKING_CODE} = process.env
// ReactGA.initialize(REACT_APP_GA_TRACKING_CODE);
// ReactGA.pageview(window.location.pathname + window.location.search);
function TopBar({
    useLogin,
    useTranslate
}) {
    //i18n
    const { t,i18n } = useTranslation();
    //redux store
    const {translate,switchMode,logout} =  useActions();
    const theme = useSelector(state => state.theme);//String
    const {auth,avatar,username} = useSelector(state => state.auth);//Boolean

    //local state
    const [menuEl, setMenuEl] = useState(null);
    const [userEl,setUserEl] = useState(null);
    const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
    const [checked, setChecked] = useState(theme==="Dark");
    const [showSideMenu,setShowSideMenu] = useState(false);
    const [showDark,setShowDark] = useState(false);
    const darkTheme={"Dark":"#1D1B8C",}
    const menuId = 'primary-search-account-menu';
    //function
    const handleClick = (event) => {
        event.preventDefault();
        setMenuEl(event.currentTarget);
    };

    //Mobile menu
    const handleMobileMenuOpen = (event) => {
        setMobileAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileAnchorEl(null);
    };
    //user action
    const handleLogout = (e) => {
        e.preventDefault();
        // eslint-disable-next-line no-restricted-globals
        var ok = confirm(t("appbar.logout_check"))
        if(ok) logout();
        setUserEl(null);
        eventTracker("user action","user logout")
    };

    const handleUserMenuOpen = (event) => {
        setUserEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setUserEl(null);
    };
    const handleSideMenu=()=>{
        setShowSideMenu(true)
    };
    
    const changeLanguage = (lng) => {
        if(lng!==i18n.language) {
            i18n.changeLanguage(lng);
            translate(lng)
            eventTracker("user action","translate");
        }
        setMenuEl(null);
    };
    //--theme control
    const handleSwitch=(e)=>{
        const bool = e.target.checked;
        setChecked(prev=>!prev)
        switchMode(bool?"Dark":"Light");
        const delayShow = setTimeout(() =>{
            setShowDark(bool);
        },500)
        return ()=>clearTimeout(delayShow);
    };

    const userAuth=(
        <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleUserMenuOpen}
            color="inherit"
        >
            {/* <AccountCircle /> */}
            <Avatar alt="Remy Sharp" src={avatar} />
        </IconButton>
    );

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
            <MenuItem onClick={handleMenuClose}>{username}</MenuItem>
            <MenuItem onClick={()=>{
              eventTracker("user action","to user account page")
              window.location.href="#/account"}
            }>
                {t("account.account")}
            </MenuItem>
           <MenuItem onClick={handleLogout }>{t("appbar.Logout")}</MenuItem>
        </Menu>
      );

    const themeSwitch =()=>{
        const timeTranslate = { enter: 50,exit: 500};
        return(
            <>
                {showDark ? (
                    <Zoom in={checked} timeout={timeTranslate} >
                        {<NightsStayIcon color="action" fontSize="large"/>}
                    </Zoom>
                ):(
                    <Zoom in={!checked} timeout={timeTranslate} >
                        {<Brightness6Icon color="warning" fontSize="large"/>}
                    </Zoom>
                )}
            </>
        );
    };
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}

            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(mobileAnchorEl)}
            onClose={handleMobileMenuClose}
        >
        <MenuItem>
            <FormControlLabel 
                control={<Switch  checked={checked} color="default" onChange={handleSwitch}/>} 
                label={themeSwitch()} 
            />
        </MenuItem>
         {useTranslate?(
          <MenuItem>
            <Button color="inherit" onClick={handleClick} disableElevation >
                {t("appbar.current")}
            </Button>
        </MenuItem>):null}
        {useLogin ? (
            <MenuItem>
            {auth ?
                userAuth:(
                <Button color="inherit" href="#/login">
                    {t("appbar.Login")}
                </Button>
                )}
            </MenuItem>
            ):null}
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
    );


    return (
        <Box sx={{ flexGrow: 5 }}>
            <AppBar position="static" sx={{backgroundColor:darkTheme[theme]}}>
            <Toolbar >
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleSideMenu}
                    >
                    <MenuIcon />
                </IconButton>
                <Box sx={{ flexGrow: 0,display:{xs:"none",sm:"none",md:"block"} }}>
                    <img src={neko} width={50} alt="logo" />
                </Box>
                <Typography 
                    variant="h6" component="div" 
                    sx={{ flexGrow: 0,marginLeft:2}}
                    onClick={()=>window.location.href="/"}
                >
                    {t("appbar.title")}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ flexGrow: 0,display:{xs:"none",sm:"block"}}} >
                    <FormControlLabel 
                        control={<Switch  checked={checked} color="default" onChange={handleSwitch}/>} 
                        label={themeSwitch()}
                    />
                  
                    {/* {themeSwitch()} */}
              
  
                    {useTranslate?(
                        <Button color="inherit" onClick={handleClick} disableElevation >
                            {t("appbar.current")}
                        </Button>
                        ):null}

                    {useLogin ? (
                        auth ? 
                        userAuth:(
                            <Button color="inherit" href="#/login">{t("appbar.Login")}</Button>
                            )
                        ):null}
                </Box>
                <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="show more"
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                    >
                    <MoreIcon />
                    </IconButton>
                </Box>
            </Toolbar>
            {<SideBar show={showSideMenu} setShow={setShowSideMenu}/>}
            {renderMobileMenu}
            {renderMenu}
            {renderUserMenu}
        </AppBar>
      </Box>
    );
};


TopBar.propTypes = {
    useLogin: PropTypes.bool,
    useTranslate: PropTypes.bool,
};

TopBar.defaultProps = {
    useLogin: true,
    useTranslate: true,
};

export default TopBar;


