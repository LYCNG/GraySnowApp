import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import neko from "../img/nako.png"

function TopBar() {
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
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    React Project 
                </Typography>
                <Box sx={{ flexGrow: 15 }} />
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
      </Box>
    );
}

export default TopBar;
