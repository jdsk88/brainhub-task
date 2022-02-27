import { useTheme } from "@mui/material/styles";
import { List, Typography } from "@mui/material";
import MenuItem from "../item";
import MenuCollapse from "../collapse";

const MenuGroup = ({ item }) => {
  const theme = useTheme();
  const items = item.children?.map((menu) => {
    switch (menu.type) {
      case "collapse":
        return <MenuCollapse key={menu.id} menu={menu} level={1} />;
      case "item":
        return <MenuItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });
  return (
    <>
      <List
        subheader={
          item.title && (
            <Typography
              variant="caption"
              sx={{ ...theme.typography.menuCaption }}
              display="block"
              gutterBottom
            >
              {item.title}
            </Typography>
          )
        }
      >
        {items}
      </List>
    </>
  );
};

export default MenuGroup;
