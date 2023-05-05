import ListAltIcon from '@mui/icons-material/ListAlt';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import { Icon } from '@mui/material';
const basePath="/Client"
const navItems = [
    {
      title: "Acceuil",
      icon: <HomeIcon />,
      href: basePath,
    },
    {
      title: "Commandes",
      icon: <ListAltIcon />,
      href: basePath+"/order",
    },
    {
      title: "contacts",
      icon: <CallIcon />,
      href: "/admin/pressing",
    },
    // {
    //   title: "Gestion des employees",
    //   icon: "layout",
    //   href: "/admin/forms",
    // },
    // {
    //   title: "Gestion des abonnements",
    //   icon: "info",
    //   href: "/alerts",
    // },
   
  ];
  
  export default navItems;
  