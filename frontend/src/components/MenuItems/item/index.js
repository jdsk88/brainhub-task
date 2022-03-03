import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Chip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { MENU_OPEN, SET_MENU_STATE } from "store/actions";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const MenuItem = ({ item, level }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const configuration = useSelector((state) => state.configuration);
  const matchesSM = useMediaQuery(theme.breakpoints.down("lg"));

  const Icon = item.icon;
  const isIcon = item?.icon ? <Icon /> : <FiberManualRecordIcon />;

  let itemTarget = "_self";
  if (item.target) {
    itemTarget = "_blank";
  }

  let listItemProps = {
    component: forwardRef((props, ref) => (
      <Link ref={ref} {...props} to={item.url} target={itemTarget} />
    )),
  };
  if (item?.external) {
    listItemProps = { component: "a", href: item.url, target: itemTarget };
  }

  const itemHandler = (id) => {
    dispatch({ type: MENU_OPEN, id });
    if (matchesSM) dispatch({ type: SET_MENU_STATE, opened: false });
  };

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      sx={{
        mb: 0.5,
        alignItems: "center",
        backgroundColor: level > 1 ? "transparent !important" : "inherit",
        pl: `${level * 24}px`,
      }}
      selected={configuration.isOpen.findIndex((id) => id === item.id) > -1}
      onClick={() => itemHandler(item.id)}
    >
      <ListItemIcon>{isIcon}</ListItemIcon>
      <ListItemText
        primary={
          <Typography
            color="inherit"
            sx={
              !configuration.opened
                ? { color: "black" }
                : { color: "transparent" }
            }
          >
            {!configuration.opened ? item.title : "."}
          </Typography>
        }
        secondary={
          item.caption && (
            <Typography
              variant="caption"
              sx={{ ...theme.typography.subMenuCaption }}
              display="block"
              gutterBottom
            >
              {item.caption}
            </Typography>
          )
        }
      />

      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
};

export default MenuItem;
