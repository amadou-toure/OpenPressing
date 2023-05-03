import React, { useEffect } from "react";
// import FeatherIcon from "feather-icons-react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import PropTypes from "prop-types";
// Dropdown Component
import SearchDD from "./SearchDD";
import ProfileDD from "./ProfileDD";
import {Button} from "@mui/material";
import Link from "next/link";
import navItems from "./navItems";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Header = ({ sx, customClass, toggleMobileSidebar, position, id}) => {
  const [isLogedIn,setLogin]=React.useState(false)
  if(typeof window !== 'undefined'){
    if(localStorage.getItem('userId')){
    useEffect(()=>{
      setLogin(true)
    })
  }else{
    useEffect(()=>{
      setLogin(false)
    })
  }
  }
  return (
    <AppBar sx={sx} position={position} elevation={0} className={customClass}>
      <Toolbar>
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "flex",
            },
          }}
        >
          <KeyboardArrowDownIcon />
        </IconButton>
        {/* ------------------------------------------- */}
        {/* Search Dropdown */}
        {/* ------------------------------------------- */}
        <SearchDD />
        {/* ------------ End Menu icon ------------- */}
          {navItems.map((nav)=>
            <Button variant="a" href={nav.href}>{nav.icon}{nav.title}</Button>
          )}
        <Box flexGrow={1} />

        {isLogedIn?<ProfileDD />:<Box marginLeft={3}
                marginBottom={2}
                marginTop={2} >
          
            < >
              <Button variant="contained" href='./signUp' >S'inscrire</Button>
              <Button marginLeft={3}  sx={{ color:'white',
                              boxSizing:'border-box',
                              borderWidth:'1px',
                              borderColor:'white',
              }} variant="outlined" href='./login'>Se connecter</Button>
            </>

          </Box>
        }
        {/* ------------------------------------------- */}
        {/* Profile Dropdown */}
        {/* ------------------------------------------- */}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
  customClass: PropTypes.string,
  position: PropTypes.string,
  toggleSidebar: PropTypes.func,
  toggleMobileSidebar: PropTypes.func,
  id: PropTypes.string,
};

export default Header;
