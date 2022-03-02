import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AppBar, Drawer } from "components/AppBar";
import MenuList from "components/MenuItems";
import { useDispatch, useSelector } from "react-redux";
import { SET_MENU_STATE } from "store/actions";
import { GetApp, InsertInvitation, Refresh, Task } from "@mui/icons-material";
import { Button } from "@mui/material";
import EventsServices from "services/api/events";
const mdTheme = createTheme();

function MainLayout() {
  const configuration = useSelector((state) => state.configuration);
  const events = useSelector((state) => state.events.items);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
    dispatch({ type: SET_MENU_STATE, payload: open });
  };

  const handleInitialState = () => {
    //   if ((events && events.length > 0) || (events && events.length < 5)) {
    //     EventsServices.deleteAllItems(dispatch);
    //   }
    EventsServices.initialState(dispatch);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
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
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {configuration.isOpen[0]}
            </Typography>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
              color="inherit"
            >
              <Typography>
                You have{" "}
                <strong style={{ fontSize: 18 }}>
                  {events ? events.length : 0}
                  {/*  */}
                </strong>{" "}
                events stored in mongodb
              </Typography>
              <Button
                onClick={() => EventsServices.getItems(dispatch)}
                color="info"
                variant="contained"
              >
                Reload state
                <Refresh />
              </Button>
              <Button
                onClick={() => handleInitialState()}
                color="success"
                variant="contained"
              >
                Initial State <GetApp />
              </Button>
              <Button
                onClick={() => {
                  events && EventsServices.deleteAllItems(dispatch);
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
