import React from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";
import DryCleaningIcon from '@mui/icons-material/DryCleaning';

import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  Link,
  Button,
  Typography,
  ListItem,
  Collapse,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
// import FeatherIcon from "feather-icons-react";
import LogoIcon from "../logo/LogoIcon";
import Menuitems from "../sidebar/MenuItems";
import { useRouter } from "next/router";

const Sidebar = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }) => {
  const [open, setOpen] = React.useState(true);

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleClick = (index) => {
    if (open === index) {
      setOpen((prevopen) => !prevopen);
    } else {
      setOpen(index);
    }
  };
  let curl = useRouter();
  const location = curl.pathname;

  const SidebarContent = (
    <Box p={2}>
      <DryCleaningIcon fontSize="large" sx={{color: 'cyan', fontSize :'200px',height:'100px'}}/>
     < Typography variant="body2"> Open Pressing</Typography>
      <Box mt={2}>
        <List>
          {Menuitems.map((item, index) => (
            <List component="nav" disablePadding key={item.title}>
              
              <NextLink href={item.href}>
                <ListItem
                  onClick={() => handleClick(index)}
                  
                  selected={location === item.href}
                  sx={{
                    mb: 1,
                    ...(location === item.href && {
                      color: "white",
                      backgroundColor: (theme) =>
                        `${theme.palette.primary.main}!important`,
                    }),
                  }}
                >
                  <ListItemIcon>
                    { 
                    item.icon
                     }
                  </ListItemIcon>
                  <ListItemText sx={{textDecoration:'none',color:'black',fontSize:500}} onClick={onSidebarClose} primary={item.title} />
                </ListItem>
              </NextLink>
            </List>
          ))}
        </List>
      </Box>
    </Box>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: "265px",
            border: "0 !important",
            boxShadow: "0px 7px 30px 0px rgb(113 122 131 / 11%)",
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }
  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      PaperProps={{
        sx: {
          width: "265px",
          border: "0 !important",
        },
      }}
      variant="temporary"
    >
      {SidebarContent}
    </Drawer>
  );
};

Sidebar.propTypes = {
  isMobileSidebarOpen: PropTypes.bool,
  onSidebarClose: PropTypes.func,
  isSidebarOpen: PropTypes.bool,
};

export default Sidebar;
