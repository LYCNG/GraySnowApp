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
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
const {REACT_APP_GITHUB_PAGE_URL} = process.env;
const url = REACT_APP_GITHUB_PAGE_URL

function TopBar({
    useLogin,
    useTranslate
}) {
    //i18n
    const { t,i18n } = useTranslation();
    //redux store
    const {translate,switchMode,logout} =  useActions();
    let theme = useSelector(state => state.theme);//String
    let {auth,avatar,username} = useSelector(state => state.auth);//Boolean

    //local state
    const [menuEl, setMenuEl] = useState(null);
    const [userEl,setUserEl] = useState(null);
    const [checked, setChecked] = useState(theme==="Dark");
    const menuId = 'primary-search-account-menu';
    const [showSideMenu,setShowSideMenu] = useState(false);
    const darkTheme={"Dark":"#1D1B8C",}

    //function
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

    //menu control
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
        var ok = confirm(t("appbar.logout_check"))
        if(ok) logout();
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
          <MenuItem onClick={handleMenuClose}>{username}</MenuItem>
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
            {/* <AccountCircle /> */}
            <Avatar alt="Remy Sharp" src={avatar} />
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

                <FormControlLabel 
                    control={<Switch  checked={checked} color="default" onChange={handleSwitch}/>} 
                    label={t(`appbar.${theme}`)} 
                />

                {useTranslate?(<Button color="inherit" onClick={handleClick} disableElevation >{t("appbar.current")}</Button>):null}

                {useLogin ? (
                    auth ? userAuth:(
                        <Button color="inherit" href={`https://LYCNG.github.io/react-temp/login`}>{t("appbar.Login")}</Button>
                        )
                    ):null}

            </Toolbar>
            {<SideBar show={showSideMenu} setShow={setShowSideMenu}/>}
            {renderMenu}
            {renderUserMenu}
        </AppBar>
      </Box>
    );
}


TopBar.propTypes = {
    useLogin: PropTypes.bool,
    useTranslate: PropTypes.bool,
};

TopBar.defaultProps = {
    useLogin: true,
    useTranslate: true,
};

export default TopBar;


