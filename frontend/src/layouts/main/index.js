import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { AppBar, Drawer } from "components/AppBar";
import MenuList from "components/MenuItems";
import { useDispatch, useSelector } from "react-redux";
import { SET_MENU_STATE } from "store/actions";
import { GetApp, Refresh } from "@mui/icons-material";
import { Button } from "@mui/material";
import EventsServices from "services/api/events";
import { useSnackbar } from "notistack";

function MainLayout() {
  const { enqueueSnackbar } = useSnackbar();
  const Snackbar = (msg, variant) => {
    enqueueSnackbar(msg, { variant });
  };
  const mdTheme = createTheme();
  const events = useSelector((state) => state.events.items);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
    dispatch({ type: SET_MENU_STATE, payload: open });
  };

  const handleInitialState = () => {
    EventsServices.initialState(dispatch, Snackbar);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
              color="inherit"
            >
              <Button
                size="small"
                onClick={() => EventsServices.getItems(dispatch, Snackbar)}
                color="info"
                variant="contained"
              >
                Reload state
                <Refresh />
              </Button>
              <Button
                size="small"
                onClick={() => handleInitialState()}
                color="success"
                variant="contained"
              >
                Initial State <GetApp />
              </Button>
              <Button
                size="small"
                onClick={() => {
                  events && EventsServices.deleteAllItems(dispatch, Snackbar);
                }}
                color="error"
                variant="contained"
              >
                Clear MongoDB{" "}
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            onClick={toggleDrawer}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <MenuList />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="xxl" sx={{ my: 4 }}>
            <Outlet />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default MainLayout;
