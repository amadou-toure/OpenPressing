import ListAltIcon from '@mui/icons-material/ListAlt';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import { Icon } from '@mui/material';
const navItems = [
    {
      title: "Acceuil",
      icon: <HomeIcon />,
      href: "/Client",
    },
    {
      title: "Commandes",
      icon: <ListAltIcon />,
      href: "/admin/enseigneSave",
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
  