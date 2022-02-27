import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import {
  Toolbar,
  IconButton,
  Drawer,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import config from "store/config";
import MenuList from "components/MenuItems";

const SideMenu = ({ drawerOpen, handleMenuToggle }) => {
  const theme = useTheme();
  const resizer = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {!drawerOpen ? (
        <></>
      ) : (
        <Drawer
          open={drawerOpen}
          onClose={handleMenuToggle}
          sx={{
            "& .MuiDrawer-paper": {
              width: resizer ? config.drawerWidth : "100%",
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
            },
          }}
          color="inherit"
        >
          <Toolbar
            sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
            onClick={handleMenuToggle}
            variant="dense"
          >
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="open drawer"
            >
              <ArrowBack />
            </IconButton>
          </Toolbar>
          <MenuList />
          <Divider />
        </Drawer>
      )}
    </>
  );
};

SideMenu.propTypes = {
  drawerOpen: PropTypes.bool,
  handleMenuToggle: PropTypes.func,
};

export default SideMenu;
