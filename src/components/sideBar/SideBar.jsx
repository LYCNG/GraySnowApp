import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import { useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
const {REACT_APP_PUBLIC_URL} = process.env;
const url = REACT_APP_PUBLIC_URL
function SideBar({show,setShow}) {
 
    let theme = useSelector((state)=>state.theme);

    let darkTheme = {"Dark":"#4B4B4B"};

    const {t} =useTranslation();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setShow(open);
      };

    const menuList = [
      {text: 'home', icon:<HomeIcon />,root:url},
      {text: 'new', icon:<NewReleasesIcon />,root:"#"},
      {text: 'feature', icon:<FeaturedPlayListIcon />,root:"#"},
      {text: 'project', icon:<AutoAwesomeMosaicIcon />,root:"#"},
    ];

    const list = (anchor) => (
        <Box

          sx={{ 
            backgroundColor:darkTheme[theme],
            color:theme==="Dark"?"white":"",
            height:"100vh",
            width:250
          }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List >
            {menuList.map((item, index) => (
              <ListItem button key={index} onClick={()=>window.location.href=item.root}>
                <ListItemIcon sx={{ color: 'inherit' }} >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={t(`sideMenu.${item.text}`)} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      );
    
    return (
        <Drawer
            anchor="left"
            open={show}
            onClose={toggleDrawer(false)}
          >
            {list("left")}
        </Drawer>
    )
}

export default SideBar
