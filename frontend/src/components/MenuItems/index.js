import { Typography } from "@mui/material";
import menuItems from "menu-items";
import MenuGroup from "./group";

const MenuList = () => {
  const items = menuItems.items.map((item) => {
    switch (item.type) {
      case "container":
        return <MenuGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{items}</>;
};

export default MenuList;
