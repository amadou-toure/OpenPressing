import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import BadgeIcon from '@mui/icons-material/Badge';
import BallotIcon from '@mui/icons-material/Ballot';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
const Menuitems = [
  {
    title: "Tableau de bord",
    icon: <DashboardIcon />,
    href: "/admin/",
  },
  {
    title: "Enseigne",
    icon: <BallotIcon/>,
    href: "/admin/enseigneSave",
  },
  {
    title: "Gestion des pressing",
    icon: <LocalLaundryServiceIcon />,
    href: "/admin/pressing",
  },
  {
    title: "Gestion des employees",
    icon: <BadgeIcon />,
    href: "/admin/forms",
  },
  {
    title: "Gestion des abonnements",
    icon: <CardMembershipIcon/>,
    href: "/alerts",
  },
 
];

export default Menuitems;
