import { useState } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuItem from "../item";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { ArrowCircleUp, ArrowCircleDown } from "@mui/icons-material";

const MenuCollapse = ({ menu, level }) => {
  const theme = useTheme();
  const configuration = useSelector((state) => state.configuration);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleClick = () => {
    setOpen(!open);
    setSelected(!selected ? menu.id : null);
  };

  const menus = menu.children?.map((item) => {
    switch (item.type) {
      case "collapse":
        return <MenuCollapse key={item.id} menu={item} level={level + 1} />;
      case "item":
        return <MenuItem key={item.id} item={item} level={level + 1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  const Icon = menu.icon;
  const menuIcon = menu.icon ? (
    <Icon
      strokeWidth={1.5}
      size="1.3rem"
      style={{ marginTop: "auto", marginBottom: "auto" }}
    />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: selected === menu.id ? 8 : 6,
        height: selected === menu.id ? 8 : 6,
      }}
      fontSize={level > 0 ? "inherit" : "medium"}
    />
  );

  return (
    <>
      <ListItemButton
        sx={{
          mb: 0.5,
          alignItems: "flex-start",
          backgroundColor: level > 1 ? "transparent !important" : "inherit",
          py: level > 1 ? 1 : 1.25,
          pl: `${level * 24}px`,
        }}
        selected={selected === menu.id}
        onClick={handleClick}
      >
        <ListItemIcon sx={{ my: "auto", minWidth: !menu.icon ? 18 : 36 }}>
          {menuIcon}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              variant={selected === menu.id ? "h5" : "body1"}
              // color="inherit"
              sx={{ my: "auto" }}
            >
              {menu.title}
            </Typography>
          }
          secondary={
            menu.caption && (
              <Typography
                variant="caption"
                sx={{ ...theme.typography.subMenuCaption }}
                display="block"
                gutterBottom
              >
                {menu.caption}
              </Typography>
            )
          }
        />
        {open ? (
          <ArrowCircleUp
            stroke={1.5}
            size="1rem"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          />
        ) : (
          <ArrowCircleDown
            stroke={1.5}
            size="1rem"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{
            position: "relative",
            "&:after": {
              content: "''",
              position: "absolute",
              left: "32px",
              top: 0,
              height: "100%",
              width: "1px",
              opacity: theme.palette.mode === "dark" ? 0.2 : 1,
              background:
                theme.palette.mode === "dark"
                  ? theme.palette.dark.light
                  : theme.palette.primary.light,
            },
          }}
        >
          {menus}
        </List>
      </Collapse>
    </>
  );
};

export default MenuCollapse;
