import { forwardRef, useEffect } from "react";
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
  const isIcon = item?.icon ? (
    <Icon stroke={1.5} size="1.3rem" />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width:
          configuration.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
        height:
          configuration.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
      }}
      fontSize={level > 0 ? "inherit" : "medium"}
    />
  );

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

  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split("/")
      .findIndex((id) => id === item.id);
    if (currentIndex) {
      dispatch({ type: MENU_OPEN, id: item.id });
    }
  }, [dispatch, item.id]);

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      sx={{
        mb: 0.5,
        alignItems: "flex-start",
        backgroundColor: level > 1 ? "transparent !important" : "inherit",
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`,
      }}
      selected={configuration.isOpen.findIndex((id) => id === item.id) > -1}
      onClick={() => itemHandler(item.id)}
    >
      <ListItemIcon sx={{ my: "auto", minWidth: !item?.icon ? 18 : 36 }}>
        {isIcon}
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            variant={
              configuration.isOpen.findIndex((id) => id === item.id) > -1
                ? "h5"
                : "body1"
            }
            color="inherit"
          >
            {item.title}
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
