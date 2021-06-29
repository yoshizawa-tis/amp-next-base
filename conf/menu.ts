import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const menuList = [
  {text: "Dashboard", href: "/", icon: DashboardIcon},
  {text: "Orders", href: "/orders", icon: ShoppingCartIcon},
  {text: "Hooks", href: "/hooks", icon: AccessibilityIcon},
  {text: "STO", href: "/sto", icon: AddIcon},
  {text: "Images", href: "/images", icon: AddIcon},
  {text: "SignOut", icon: ExitToAppIcon},
]
